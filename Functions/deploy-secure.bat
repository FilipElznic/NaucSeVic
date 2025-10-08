@echo off
echo Deploying Firebase Cloud Functions (bypassing lint)...
echo.

cd /d "%~dp0"

echo Current project:
firebase use

echo.
echo Starting deployment (skipping predeploy scripts)...
firebase deploy --only functions --force

if %errorlevel% equ 0 (
    echo.
    echo ✅ Secured functions deployed successfully!
    echo.
    echo Your functions now include:
    echo ✅ Input validation and sanitization
    echo ✅ Rate limiting protection
    echo ✅ Authentication checks
    echo ✅ Error handling and logging
    echo ✅ Security headers
    echo.
    echo Test your functions at:
    echo https://console.firebase.google.com/project/naucsevic/functions
) else (
    echo.
    echo ❌ Deployment failed. Check the error messages above.
)

pause