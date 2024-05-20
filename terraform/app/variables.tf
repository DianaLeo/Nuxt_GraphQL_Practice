variable "vpc_name" {
  type = string
  description = "Name for the VPC"
  default = "luckiest-dev-vpc"
}

variable "vpc_cidr" {
  type = string
  description = "CIDR block for the VPC"
  default = "10.0.0.0/16"
}