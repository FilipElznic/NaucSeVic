# Deploy Firebase Cloud Functions
Write-Host "Deploying Firebase Cloud Functions..." -ForegroundColor Green
Write-Host ""

# Change to script directory
Set-Location $PSScriptRoot

# Check Firebase login status
Write-Host "Checking Firebase login status..." -ForegroundColor Yellow
try {
    firebase projects:list | Out-Null
} catch {
    Write-Host "You need to login to Firebase first." -ForegroundColor Red
    firebase login
}

Write-Host ""
Write-Host "Current project:" -ForegroundColor Yellow
firebase use

Write-Host ""
Write-Host "Starting deployment..." -ForegroundColor Yellow
$result = firebase deploy --only functions

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "✅ Functions deployed successfully!" -ForegroundColor Green
    Write-Host ""
    Write-Host "You can now test your functions at:" -ForegroundColor Cyan
    Write-Host "https://console.firebase.google.com/project/naucsevic/functions" -ForegroundColor Blue
} else {
    Write-Host ""
    Write-Host "❌ Deployment failed. Check the error messages above." -ForegroundColor Red
}

Read-Host "Press Enter to continue"