@echo off
echo Starting NaucSeVic Frontend...
echo.

cd /d "%~dp0"

echo Installing dependencies if needed...
npm install

echo.
echo Starting development server...
echo Navigate to: http://localhost:5173/cloud-functions to test Cloud Functions
echo.

npm run dev