# PowerShell script for Windows Docker setup
Write-Host "🐳 Setting up Docker for NaucSeVic project..." -ForegroundColor Cyan

# Check if Docker is installed
try {
    docker --version | Out-Null
    Write-Host "✅ Docker is installed" -ForegroundColor Green
} catch {
    Write-Host "❌ Docker is not installed. Please install Docker Desktop first." -ForegroundColor Red
    Write-Host "Download from: https://www.docker.com/products/docker-desktop" -ForegroundColor Yellow
    exit 1
}

# Check if Docker Compose is available
try {
    docker compose version | Out-Null
    Write-Host "✅ Docker Compose is available" -ForegroundColor Green
} catch {
    Write-Host "❌ Docker Compose is not available. Please update Docker Desktop." -ForegroundColor Red
    exit 1
}

# Build the production image
Write-Host "🏗️ Building production Docker image..." -ForegroundColor Yellow
docker build -t nauc-se-vic:latest .

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Docker image built successfully" -ForegroundColor Green
} else {
    Write-Host "❌ Failed to build Docker image" -ForegroundColor Red
    exit 1
}

# Build the development image
Write-Host "🏗️ Building development Docker image..." -ForegroundColor Yellow
docker build -f Dockerfile.dev -t nauc-se-vic:dev .

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Development Docker image built successfully" -ForegroundColor Green
} else {
    Write-Host "❌ Failed to build development Docker image" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "🚀 Setup complete! You can now run:" -ForegroundColor Green
Write-Host "  npm run docker:compose     # Run production build with Docker Compose" -ForegroundColor Cyan
Write-Host "  npm run docker:compose-dev # Run development build with Docker Compose" -ForegroundColor Cyan
Write-Host "  npm run docker:run         # Run production build manually" -ForegroundColor Cyan
Write-Host "  npm run docker:run-dev     # Run development build manually" -ForegroundColor Cyan
Write-Host ""
Write-Host "🌐 Access your app at:" -ForegroundColor Green
Write-Host "  Production: http://localhost:3000" -ForegroundColor Cyan
Write-Host "  Development: http://localhost:5173" -ForegroundColor Cyan