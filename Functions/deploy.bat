@echo off
echo Deploying Firebase Cloud Functions...
echo.

cd /d "%~dp0"

echo Checking Firebase login status...
firebase projects:list >nul 2>&1
if %errorlevel% neq 0 (
    echo You need to login to Firebase first.
    firebase login
)

echo.
echo Current project:
firebase use

echo.
echo Starting deployment...
firebase deploy --only functions

if %errorlevel% equ 0 (
    echo.
    echo ✅ Functions deployed successfully!
    echo.
    echo You can now test your functions at:
    echo https://console.firebase.google.com/project/naucsevic/functions
) else (
    echo.
    echo ❌ Deployment failed. Check the error messages above.
)

pause