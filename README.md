# Simple CRUD Api Project

This is a project that I made when learning _Docker_. It's just a simple CRUD Api but uses a lot of docker features that I will (probably) uses a lot later on.

## Tech Stack

- `Express`
- `Prisma`
- `TypeScript`
- `Prettier & ESlint`
- `Docker`

## Prisma Schema

```
model User {
  id String @id @default(uuid())
  name String
  email String @unique
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

`id`: The primary key of User table. It's default value is randomly generated uuid.<br>
`name`: a string that contains name.<br>
`email`: a string that contains email. Each email in the table **must** be unique.<br>
`createdAt`: a DateTime that contains information when a record is created. It's generated automatically.<br>
`updatedAt`: a DateTime that contains information when a record is updated. It's generated automatically.

## How to use

In order to use this project. I recommend you to install _Docker_ on your machine first. After that, Just follow this instructions:

1. Clone this project to your local machine.
2. Make sure that docker is running on your machine (If not, just open Docker Desktop)
3. Open the project directory and run `docker compose up -d`. This will spin up a Postgres database and the app.
4. Wait till is complete building docker images and tada, the api is running.

## Api Endpoints

### `GET /api/users/`

When you make a `GET` request to this endpoint. You will get a JSON response that contains all data's in the user Table.

### `GET /api/users/:id`

When you make a `GET` request to this endpoint. You will get a JSON response that contains a record data from user table that matches the id.

### `POST /api/users/`

When you make a `POST` request to this endpoint. You will create a new record in the user table.

Request body example:

```json
{
  "name": "Udin",
  "email": "mangudin@gmail.com"
}
```

> Sending anything less or more than name and email may result in error.

### `PUT /api/users/:id`

When you make a `PUT` request to this endpoint. You will update a record in the user table that matches the id.

Request body example:

```json
{
  "name": "Udin D'Alter"
}
```

> Unlike POST request, you could only send a name or email and it's work.

### `DELETE /api/users/:id`

When you make a `DELETE` request to this endpoint. You will delete a record in the user table that matches the id.
