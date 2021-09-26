terraform {
  backend "remote" {
    organization = "tyassis"
    workspaces {
      name = "taylon-gym"
    }
  }

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.27"
    }
  }

  required_version = ">= 0.14.9"
}

provider "aws" {
  profile = "tyassis"
  region  = "us-west-2"
}

resource "aws_instance" "app_server" {
  # ami           = "ami-830c94e3"
  ami           = "ami-08d70e59c07c61a3a"
  instance_type = "t2.micro"

  tags = {
    Name = var.instance_name
  }
}

