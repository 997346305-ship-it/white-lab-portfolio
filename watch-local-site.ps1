$ErrorActionPreference = "Stop"
$siteUrl = "http://127.0.0.1:8000/"
$serverScript = Join-Path $PSScriptRoot "serve.js"
$logFolder = Join-Path $PSScriptRoot ".codex-artifacts"
$logPath = Join-Path $logFolder "local-server.log"
$errorLogPath = Join-Path $logFolder "local-server-error.log"
$mutex = New-Object System.Threading.Mutex($false, "WhiteLabPortfolioWatcher")

if (-not $mutex.WaitOne(0, $false)) {
  exit 0
}

function Test-WhiteLabServer {
  try {
    $response = Invoke-WebRequest -Uri $siteUrl -UseBasicParsing -TimeoutSec 2
    return $response.StatusCode -eq 200 -and $response.Content -match "White Lab"
  } catch {
    return $false
  }
}

function Find-NodeExecutable {
  $knownNode = "C:\Program Files\nodejs\node.exe"
  if (Test-Path -LiteralPath $knownNode) {
    return $knownNode
  }

  $nodeCommand = Get-Command node.exe -ErrorAction SilentlyContinue
  if ($nodeCommand) {
    return $nodeCommand.Source
  }

  throw "Node.js was not found."
}

try {
  New-Item -ItemType Directory -Path $logFolder -Force | Out-Null
  $nodePath = Find-NodeExecutable

  while ($true) {
    if (-not (Test-WhiteLabServer)) {
      $portOwner = Get-NetTCPConnection -LocalPort 8000 -State Listen -ErrorAction SilentlyContinue

      if (-not $portOwner) {
        Start-Process `
          -FilePath $nodePath `
          -ArgumentList "`"$serverScript`"" `
          -WorkingDirectory $PSScriptRoot `
          -WindowStyle Hidden `
          -RedirectStandardOutput $logPath `
          -RedirectStandardError $errorLogPath

        Start-Sleep -Seconds 2
      }
    }

    Start-Sleep -Seconds 5
  }
} finally {
  $mutex.ReleaseMutex()
  $mutex.Dispose()
}
