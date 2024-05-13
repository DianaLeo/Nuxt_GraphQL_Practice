#!/bin/bash

# 检查.env文件是否存在
if [ -f ../.env ]; then
    # 从.env文件中读取AWS_ACCESS_KEY_ID的值，并导出为环境变量
    export AWS_ACCESS_KEY_ID=$(grep -E "^AWS_ACCESS_KEY_ID=" ../.env | cut -d'=' -f2-)

    # 从.env文件中读取AWS_SECRET_ACCESS_KEY的值，并导出为环境变量
    export AWS_SECRET_ACCESS_KEY=$(grep -E "^AWS_SECRET_ACCESS_KEY=" ../.env | cut -d'=' -f2-)

    echo "AWS_ACCESS_KEY_ID 和 AWS_SECRET_ACCESS_KEY 已从 .env 文件中读取并导出到环境变量中。"
else
    echo ".env 文件不存在。请确保脚本在项目目录中运行，并且 .env 文件已经创建。"
fi