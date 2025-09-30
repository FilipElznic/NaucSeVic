@echo off
echo 🐳 NaucSeVic Docker Setup
echo.

REM Check if Docker is running
docker --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Docker is not installed or not running
    echo Please install Docker Desktop and make sure it's running
    pause
    exit /b 1
)

echo ✅ Docker is available
echo.

REM Build production image
echo 🏗️ Building production Docker image...
docker build -t nauc-se-vic .
if errorlevel 1 (
    echo ❌ Failed to build Docker image
    pause
    exit /b 1
)

echo ✅ Docker image built successfully
echo.

REM Build development image
echo 🏗️ Building development Docker image...
docker build -f Dockerfile.dev -t nauc-se-vic:dev .
if errorlevel 1 (
    echo ❌ Failed to build development Docker image
    pause
    exit /b 1
)

echo ✅ Development Docker image built successfully
echo.

echo 🚀 Setup complete! You can now run:
echo   npm run docker:compose     - Run production build with Docker Compose
echo   npm run docker:compose-dev - Run development build with Docker Compose
echo   npm run docker:run         - Run production build manually
echo   npm run docker:run-dev     - Run development build manually
echo.
echo 🌐 Access your app at:
echo   Production: http://localhost:3000
echo   Development: http://localhost:5173
echo.
pause