$folder = 'novum';
$sourcePath = "C:\Build_Novum";
$distPath = "$($sourcePath)\$($folder)\dist";
$versionPath = "$($sourcePath)\versions";

$repo = "https://github.com/Seido-IT/novum";
$branch = "dev";
$configuration = "production";
$version = "$$$";

$curDir = Get-Location

if (Test-Path -Path $sourcePath) {
    Write-Information "Folder sourcePath exist";
} else {
    mkdir $sourcePath;
    Write-Information "Folder sourcePath created!";
}

Write-Information "Change path to $sourcePath";
cd $sourcePath

if (Test-Path -Path $folder) {
    Write-Information "Folder repository exist";
} else {
    Write-Information "Clone repository";
    git clone $repo;
}

Write-Host "Open $folder folder" -ForegroundColor Yellow
cd $folder

Write-Host "GIT RESET" -ForegroundColor Yellow
git reset --hard

Write-Host "Change to $branch" -ForegroundColor Yellow
git checkout $branch --force

Write-Host "Pull changes" -ForegroundColor Yellow
git pull


Write-Host "NPM INIT" -ForegroundColor Yellow
npm i

Write-Host "Git stash" -ForegroundColor Yellow
git stash

Write-Host "Increase version" -ForegroundColor Yellow
npm version prepatch

Write-Host "Git stash - pop" -ForegroundColor Yellow
git stash pop

Write-Host "Push tag version into git" -ForegroundColor Yellow
#git push �-tags origin master

Write-Host "Read new version" -ForegroundColor Yellow
$version = npm pkg get version

Write-Host "New version: $version" -ForegroundColor Yellow

# Write-Host "NPM PUBLISH" -ForegroundColor Yellow
# npm publish

Write-Host "NG BUILD CONFIGURATION = $configuration" -ForegroundColor Yellow
ng b --configuration=$configuration --output-path=dist

Write-Host "Back to folder $curDir" -ForegroundColor Yellow
Set-Location -Path $curDir

Write-Host "CREATE ZIP version: $version path: $distPath" -ForegroundColor Yellow
.\zip.ps1 $version $distPath $versionPath;


Write-Host "Open folder: $versionPath" -ForegroundColor Yellow
start $versionPath
