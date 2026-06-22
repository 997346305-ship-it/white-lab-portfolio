$ErrorActionPreference = "Stop"
$siteUrl = "http://127.0.0.1:8000/"
$watcherScript = Join-Path $PSScriptRoot "watch-local-site.ps1"
$startupFolder = [Environment]::GetFolderPath("Startup")
$shortcutPath = Join-Path $startupFolder "White Lab Local Portfolio.lnk"

if (-not (Test-Path -LiteralPath $watcherScript)) {
  throw "The local watcher script is missing: $watcherScript"
}

$shell = New-Object -ComObject WScript.Shell
$shortcut = $shell.CreateShortcut($shortcutPath)
$shortcut.TargetPath = "$env:SystemRoot\System32\WindowsPowerShell\v1.0\powershell.exe"
$shortcut.Arguments = "-NoProfile -WindowStyle Hidden -ExecutionPolicy Bypass -File `"$watcherScript`""
$shortcut.WorkingDirectory = $PSScriptRoot
$shortcut.WindowStyle = 7
$shortcut.Description = "Starts and monitors the White Lab portfolio local server."
$shortcut.Save()

Start-Process `
  -FilePath "powershell.exe" `
  -ArgumentList "-NoProfile -WindowStyle Hidden -ExecutionPolicy Bypass -File `"$watcherScript`"" `
  -WorkingDirectory $PSScriptRoot `
  -WindowStyle Hidden

$deadline = (Get-Date).AddSeconds(15)
do {
  Start-Sleep -Milliseconds 300
  try {
    $response = Invoke-WebRequest -Uri $siteUrl -UseBasicParsing -TimeoutSec 2
    if ($response.StatusCode -eq 200 -and $response.Content -match "White Lab") {
      Write-Host "Autostart installed. White Lab is available at $siteUrl"
      Write-Host "Startup shortcut: $shortcutPath"
      exit 0
    }
  } catch {
  }
} while ((Get-Date) -lt $deadline)

throw "Autostart was installed, but the local site did not respond."
