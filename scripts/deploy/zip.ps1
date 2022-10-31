$fileName = "RailClient_";
$version = $args[0];
$distPath = $args[1];
$versionPath = $args[2];

# Alias for 7-zip
if (-not (test-path "C:\Program Files (x86)\7-Zip\7z.exe")) {throw "C:\Program Files (x86)\7-Zip\7z.exe needed"}
set-alias sz "C:\Program Files (x86)\7-Zip\7z.exe"


$source = "$($distPath)\*.*";
$target = "$($versionPath)\$($fileName)$($version).zip";

Write-Host $target;

Get-ChildItem -path $source | sz a -mx=9 -sdel $target $source