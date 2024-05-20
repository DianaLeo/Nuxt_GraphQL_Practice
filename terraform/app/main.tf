terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

# Configure the AWS Provider
provider "aws" {
  region = "ap-southeast-2"
}

module "vpc" {
  source = "vpc"
  name = var.vpc_name
  cidr = var.vpc_cidr
}
#
## Create a VPC
#resource "aws_vpc" "example" {
#  cidr_block = "10.0.0.0/16"
#  tags = {
#    Name = "test"
#  }
#}