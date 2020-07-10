# Backend Test
Node.js application for allow users to share feedback on their grocery orders and allow visibility to a live operations team

## Design of Project

This API is build with:
- NodeJS as Server
- Express as Framework Server
- Sequelize as SQL ORM 

The **persistence store** is *Commitlog-based* to use SQL database, as it is very practical for structured data.

## Run

Before run the project, you need define some configurations
### Config

#### Instalation of dependecies

Install all node dependencies:
```shell
npm install
```
#### `env` variables
You can find a template of `.env` file with all necesaries `env` variables for run the project.

Example:

**Server Configuration**

`PORT = 8080`

**Database Connection**

`DB_USERNAME = backend`
`DB_NAME = db_name`
`DB_HOST = localhost`
`DB_DIALECT = mysql`

**Secret Phrase for token generator**

`TOKEN_PHRASE = UXVEyYfwv@whVOaKhlW36Amp4Nqb!^#TU^s#obS7Bzw^0KEKOw`

**Credentials for admin user**

`ADMIN_USERNAME = gandalf`
`ADMIN_EMAIL = gandalf@ring.com`
`ADMIN_PASSWORD = myprecious`

## Usage

### API

**Get feedback**

- Request

```
GET http://localhost:3000/api/feedback
```

- Returns

| Code                        | Answer                |
| --------------------------- | --------------------- |
| `200 OK`                    | JSON                  |
| `500 Internal Server Error` | Internal Server error |