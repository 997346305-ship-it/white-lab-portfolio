const http = require("http");
const fs = require("fs");
const path = require("path");

const root = __dirname;
const host = "127.0.0.1";
const port = 8000;

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".mp4": "video/mp4",
  ".mov": "video/quicktime",
  ".woff": "font/woff",
  ".woff2": "font/woff2"
};

function send(res, status, body, type = "text/plain; charset=utf-8") {
  res.writeHead(status, { "Content-Type": type });
  res.end(body);
}

function sendFile(res, filePath, ext, stat, req) {
  const type = mimeTypes[ext] || "application/octet-stream";
  const range = req.headers.range;

  if (range) {
    const match = range.match(/^bytes=(\d*)-(\d*)$/);
    if (!match) {
      res.writeHead(416, { "Content-Range": `bytes */${stat.size}` });
      res.end();
      return;
    }

    const start = match[1] ? Number(match[1]) : 0;
    const end = match[2] ? Number(match[2]) : stat.size - 1;

    if (!Number.isFinite(start) || !Number.isFinite(end) || start > end || end >= stat.size) {
      res.writeHead(416, { "Content-Range": `bytes */${stat.size}` });
      res.end();
      return;
    }

    res.writeHead(206, {
      "Content-Type": type,
      "Content-Length": end - start + 1,
      "Content-Range": `bytes ${start}-${end}/${stat.size}`,
      "Accept-Ranges": "bytes",
      "Cache-Control": "no-cache"
    });
    fs.createReadStream(filePath, { start, end }).pipe(res);
    return;
  }

  res.writeHead(200, {
    "Content-Type": type,
    "Content-Length": stat.size,
    "Accept-Ranges": "bytes",
    "Cache-Control": "no-cache"
  });
  fs.createReadStream(filePath).pipe(res);
}

const server = http.createServer((req, res) => {
  const requestPath = decodeURIComponent((req.url || "/").split("?")[0]);
  let filePath = requestPath === "/" ? "/index.html" : requestPath;
  if (!path.extname(filePath)) {
    filePath = "/index.html";
  }

  const resolved = path.normalize(path.join(root, filePath));
  if (!resolved.startsWith(root)) {
    send(res, 403, "Forbidden");
    return;
  }

  fs.stat(resolved, (error, stat) => {
    if (error) {
      send(res, error.code === "ENOENT" ? 404 : 500, error.code === "ENOENT" ? "Not found" : "Server error");
      return;
    }
    if (!stat.isFile()) {
      send(res, 404, "Not found");
      return;
    }

    const ext = path.extname(resolved).toLowerCase();
    sendFile(res, resolved, ext, stat, req);
  });
});

server.listen(port, host, () => {
  console.log(`Local site running at http://${host}:${port}/`);
});
