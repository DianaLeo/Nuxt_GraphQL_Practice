resource "aws_s3_bucket" "terraform_remote_state" {
  bucket = var.bucket_name
}

resource "aws_s3_bucket_versioning" "terraform_remote_state_versioning" {
  bucket = aws_s3_bucket.terraform_remote_state.id
  versioning_configuration {
    status = "Enabled"
  }
}