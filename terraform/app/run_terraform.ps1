# 检查当前目录是否存在.terraform文件夹和terraform.tfstate文件
$terraformFolderExists = Test-Path -Path ".\.terraform" -PathType Container
$terraformStateExists = Test-Path -Path ".\terraform.tfstate" -PathType Leaf

# 如果不存在.terraform文件夹和terraform.tfstate文件，则运行terraform init命令
if (-not ($terraformFolderExists -and $terraformStateExists)) {
    Write-Host "exec 'terraform init'..."
    terraform init
}

# 运行 read_env.ps1 脚本
Write-Host "exec 'read_env.ps1'..."
.\read_env.ps1

# 运行 terraform plan 命令
Write-Host "exec 'terraform plan'..."
terraform plan

# 提示用户输入 yes 或 no
$confirmation = Read-Host "Confirm to execute 'terraform apply'? (yes/no)"

# 如果用户输入 yes，执行 terraform apply 命令
if ($confirmation -eq "yes") {
    Write-Host "exec 'terraform apply'..."
    terraform apply -auto-approve
} elseif ($confirmation -eq "no") {
    Write-Host "You cancelled 'terraform apply'"
} else {
    Write-Host "Invalid input. 'yes' or 'no'"
}