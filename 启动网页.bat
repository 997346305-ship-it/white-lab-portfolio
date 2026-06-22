@echo off
setlocal
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0start-local-site.ps1" -OpenBrowser
if errorlevel 1 pause
