## Description

Crud of not persistent contacts API using [Nest](https://github.com/nestjs/nest)

## Before running

Please create a .env file following the example in .env.example to set the port to run the code, also if you want to run using docker, you could create a .docker.env with same structure.

## Commands

To install dependencies

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# development using docker
$ docker compose up

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## To test

```bash
# to test
$ yarn run test
```

you can check here http://localhost:5002/docs

## Folder structure

I followed the next folder structure

```bash
.
├── src                       # Source files
    ├── modules               # folder to add modules of the app
        ├── moduleA
            ├── controllers   #files to handle all the incoming API requests related with the module
            ├── dtos          #For data validation and transformation, in this case used to build schemas in swagger.
            ├── services      #business logic of the application and also to make changes in database.
├── .docker.env               # environment variables for docker container
├── .env                      # to put environment variables
├── docker-compose.yml        # In order to run easily the docker container in test environment.
├── Dockerfile                # Instruction to build the image
```

## Brief Report

1. I created a Dockerfile to build properly the api and to deploy easily to services like ECS AWS or google cloud run.
2. I choosed nestjs because is a complete framework to build apis using typescript and because the good structure to modularize.
3. I created a module contact where I have a service to make changes in a not persistent array of contacts.
4. I added swagger documentation http://localhost:5002/docs to see the endpoint and the schema of the inputs and responses.
5. Added unit test for the controllers.
