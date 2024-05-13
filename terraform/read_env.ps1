# 读取.env文件中的内容
$envContent = Get-Content -Path ..\.env

# 遍历文件内容，查找并设置环境变量
foreach ($line in $envContent) {
    if ($line -match "^AWS_ACCESS_KEY_ID=(.*)") {
        $keyId = $Matches[1]
        [Environment]::SetEnvironmentVariable("AWS_ACCESS_KEY_ID", $keyId, "Process")
        Write-Host "AWS_ACCESS_KEY_ID 已设置为: $keyId"
    }
    elseif ($line -match "^AWS_SECRET_ACCESS_KEY=(.*)") {
        $secretKey = $Matches[1]
        [Environment]::SetEnvironmentVariable("AWS_SECRET_ACCESS_KEY", $secretKey, "Process")
        Write-Host "AWS_SECRET_ACCESS_KEY 已设置为: $secretKey"
    }
}