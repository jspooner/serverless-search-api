# Serverless Search API

## Getting Started

Install [Sam Local](https://github.com/awslabs/aws-sam-local)

    aws-sam-local local start-api

If you get this warning export your AWS\_PROFILE

WARNING: No AWS credentials found. Missing credentials may lead to slow startup times as detailed in https://github.com/awslabs/aws-sam-local/issues/134

    export AWS_PROFILE=MY_PROFILE

If you need a connection to other docker networks list them and add the name to the start-api command

    docker network ls
    NETWORK ID          NAME                        DRIVER              SCOPE
    091a898e1643        bridge                      bridge              local
    e34dee1ad03b        geodockeraccumulo_default   bridge              local
    123c7ae816b8        host                        host                local
    5ebafcb7cd62        none                        null                local
    9e49584ed269        placesapi_esnet             bridge              local

Starup Sam local with a given network

    aws-sam-local local start-api --docker-network placesapi_esnet
