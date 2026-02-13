# Delete old hardcoded service pages
Write-Host "This will delete the old hardcoded service page folders..." -ForegroundColor Yellow
Write-Host "The new dynamic [slug] route will handle all services from Sanity." -ForegroundColor Yellow
Write-Host ""
Read-Host "Press Enter to continue or Ctrl+C to cancel"

$serviceFolders = @(
    "advanced-educational-programs",
    "ai-software-development",
    "cloud-services",
    "data-gis-digital-solutions",
    "drone-delivery",
    "drone-in-a-box",
    "drone-surveillance-and-videography",
    "drone-survey-and-mapping",
    "educational-programs",
    "hardware-software-firmware",
    "learning-management-systems",
    "precision-spraying"
)

foreach ($folder in $serviceFolders) {
    $path = "d:\karven\app\services\$folder"
    if (Test-Path $path) {
        Write-Host "Deleting: $folder" -ForegroundColor Cyan
        Remove-Item $path -Recurse -Force
    }
}

Write-Host ""
Write-Host "Cleanup complete!" -ForegroundColor Green
Write-Host "All service pages will now be rendered from Sanity using the [slug] route." -ForegroundColor Green
