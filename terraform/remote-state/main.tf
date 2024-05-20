terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
      version = "~> 5.24.0"
    }
  }
  required_version = ">= 1.5.7"
}

provider "aws" {
  profile = var.aws_profile
  region = var.aws_region
}

module "s3_bucket" {
  source = "./modules/s3_bucket"
  bucket_name = var.s3_bucket_name
}