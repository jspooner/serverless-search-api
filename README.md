# Serverless Search API

## Getting Started

Install [Sam Local](https://github.com/awslabs/aws-sam-local)

    aws-sam-local local start-api

If you get this warning export your AWS\_PROFILE

WARNING: No AWS credentials found. Missing credentials may lead to slow startup times as detailed in https://github.com/awslabs/aws-sam-local/issues/134

    export AWS_PROFILE=MY_PROFILE

If you need a connection to other docker networks list them and add the name to the start-api command

    docker network ls

Starup Sam local with a given network

    aws-sam-local local start-api --docker-network placesapi_esnet
