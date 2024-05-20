variable "aws_region" {
  type = string
}

variable "aws_profile" {
  type = string
  default = "default"
}

variable "s3_bucket_name" {
  type = string
  description = "The name of the bucket to use for the state."
  default = "gorillarush-terraform-state"
}