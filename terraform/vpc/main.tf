module "vpc" {
  source = "terraform-aws-modules/vpc/aws"
  version = "~> 5.1.2"

  name = var.name
  cidr = var.cidr
}