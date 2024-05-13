#!/bin/bash

# 检查当前目录是否存在.terraform文件夹和terraform.tfstate文件
if [ ! -d ".terraform" ] || [ ! -f "terraform.tfstate" ]; then
    echo "执行 'terraform init'..."
    terraform init
fi

# 运行 read_env.sh 脚本
echo "执行 'read_env.sh'..."
./read_env.sh

# 运行 terraform plan 命令
echo "执行 'terraform plan'..."
terraform plan

# 提示用户输入 yes 或 no
read -p "是否执行 'terraform apply'? (yes/no): " confirmation

# 如果用户输入 yes，执行 terraform apply 命令
if [ "$confirmation" = "yes" ]; then
    echo "执行 'terraform apply'..."
    terraform apply
elif [ "$confirmation" = "no" ]; then
    echo "用户取消了 'terraform apply' 操作。"
else
    echo "无效的输入。请输入 'yes' 或 'no'。"
fi
