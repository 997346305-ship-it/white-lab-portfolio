param(
  [switch]$OpenBrowser
)

$ErrorActionPreference = "Stop"
$siteUrl = "http://127.0.0.1:8000/"
$homeUrl = "${siteUrl}#home"
$watcherScript = Join-Path $PSScriptRoot "watch-local-site.ps1"

function Test-WhiteLabServer {
  try {
    $response = Invoke-WebRequest -Uri $siteUrl -UseBasicParsing -TimeoutSec 2
    return $response.StatusCode -eq 200 -and $response.Content -match "White Lab"
  } catch {
    return $false
  }
}

if (-not (Test-WhiteLabServer)) {
  Start-Process `
    -FilePath "powershell.exe" `
    -ArgumentList "-NoProfile -WindowStyle Hidden -ExecutionPolicy Bypass -File `"$watcherScript`"" `
    -WorkingDirectory $PSScriptRoot `
    -WindowStyle Hidden

  $deadline = (Get-Date).AddSeconds(15)
  do {
    Start-Sleep -Milliseconds 300
    if (Test-WhiteLabServer) {
      break
    }
  } while ((Get-Date) -lt $deadline)
}

if (-not (Test-WhiteLabServer)) {
  throw "The local site did not start. Run install-autostart.ps1 again to repair autostart."
}

Write-Host "White Lab local site is ready: $siteUrl"

if ($OpenBrowser) {
  Start-Process $homeUrl
}
