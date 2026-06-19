@echo off
cd /d "%~dp0"
start "White Lab Local Server" cmd /k "node serve.js"
timeout /t 1 >nul
start "" http://127.0.0.1:8000/#home
