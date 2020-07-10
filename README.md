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

#### Users

**Admin**

To interact with api, you need an admin user. You can get it this way:

```
GET /api/user/admin
```

This request only works the first time.

- Answer

  You'll receive an answer like this:

  ```
  {
      "admin": {
          "id": string,
          "username": string,
          "email": string,
          "password": string,
          "userType": "admin",
          "updatedAt": date,
          "createdAt": date
      },
      "message": "Your password is {password}"
  }
  ```



**Register an user**

- Request

  ```
  POST /api/user
  ```


  - Body Parameters
    - `username:integer` (required)
    - `password:string ` (required)
    - `email:string` (required)

- Answers

  | Code                        | Answer                |
  | --------------------------- | --------------------- |
  | `200 OK`                    | JSON                  |
  | `500 Internal Server Error` | Internal Server Error |

  

**Edit  an user**

- Request

  ```
  PUT /api/user/:userId
  ```

  - Path parameters
    - `:userId:string` (required)
  - Body Parameters
    - `username:string` (optional)
    - `email:string ` (optional)
    - `password:string ` (optional)

- Answers

  | Code                        | Answer                |
  | --------------------------- | --------------------- |
  | `200 OK`                    | JSON                  |
  | `500 Internal Server Error` | Internal Server Error |

  

**Delete an user**

- Request

  ```
  DELETE /api/user/:userId
  ```

  - Path parameters
    - `:userId:string` (required)

- Answers

  | Code                        | Answer                |
  | --------------------------- | --------------------- |
  | `200 OK`                    | JSON                  |
  | `500 Internal Server Error` | Internal Server Error |





You need define `username` and `email` with their `env` variables `ADMIN_USERNAME` and `ADMIN_EMAIL`, respectively. Also you can define `password` with ADMIN_PASSWORD instead a random password.



#### Login

- Request

  ```
  POST /api/session
  ```

  - Body Params
    - `username:string(username or email)` (required)
    - `password:string` (required)

- Answers

| Code     | Answer                       |
| -------- | ---------------------------- |
| `200 OK` | JSON WEB TOKEN               |
| `200 OK` | 'User or password incorrect' |



#### Products

**Register a product**

- Request

  ```
  POST /api/product
  ```

  - Body Parameters
    - `title:string` (required)
    - `description:string ` (optional)
    - `price:integer` (required) 

- Answers

  | Code     | Answer |
  | -------- | ------ |
  | `200 OK` | JSON   |




#### Orders

**Register an order**

- Request

  ```
  POST /api/order
  ```

  - Body Parameters
    - `UserId:string` (required, relation with User)
    - `ProductId:string ` (required, relation with Product)

- Answers

  | Code                        | Answer                |
  | --------------------------- | --------------------- |
  | `200 OK`                    | JSON                  |
  | `500 Internal Server Error` | Internal Server Error |





####  Feedback

**Get feedback**

- Request

  ```
  GET /api/feedback
  ```

  - Head Parameters
    - `UserId:string` (required for authentication)
    - `user-token:string` (required for authentication)

- Answers

| Code                        | Answer                |
| --------------------------- | --------------------- |
| `200 OK`                    | JSON                  |
| `401 Unauthorized`          | Unauthorized          |
| `500 Internal Server Error` | Internal Server error |

**Register a feedback**

- Request

  ```
  POST /api/feedback
  ```

  
  - Body Parameters
    - `rate:integer` (required, range: 1-5)
    - `comment:string ` (optional)
    - `UserId:string` (relation with Product)
    - `OrderId:string` (relation with Order)
  - Head Parameters
    - `UserId:string` (required for authentication)
    - `user-token:string` (required for authentication)

- Answers

  | Code                        | Answer                |
  | --------------------------- | --------------------- |
  | `200 OK`                    | JSON                  |
  | `401 Unauthorized`          | Unauthorized          |
  | `404 Not Found`             | Not Found             |
  | `500 Internal Server Error` | Internal Server Error |

  

**Edit  feedback**

- Request

  ```
  PUT /api/feedback/:feedbackId
  ```

  - Path parameters
    - `:feedbackId:string` (required)
  - Body Parameters
    - `rate:integer` (optional)
    - `comment:string ` (optional)
    - `UserId:string` (relation with Product)
    - `OrderId:string` (relation with Order)
  - Head Parameters
    - `UserId:string` (required for authentication)
    - `user-token:string` (required for authentication)

- Answers

  | Code                        | Answer                |
  | --------------------------- | --------------------- |
  | `200 OK`                    | JSON                  |
  | `401 Unauthorized`          | Unauthorized          |
  | `404 Not Found`             | Not Found             |
  | `500 Internal Server Error` | Internal Server Error |

  

**Delete feedback**

- Request

  ```
  DELETE /api/feedback/:feedbackId
  ```

  - Path parameters
    - `:feedbackId:string` (required)
  - Head Parameters
    - `UserId:string` (required for authentication)
    - `user-token:string` (required for authentication)

- Answers

  | Code                        | Answer                |
  | --------------------------- | --------------------- |
  | `200 OK`                    | JSON                  |
  | `401 Unauthorized`          | Unauthorized          |
  | `404 Not Found`             | Not Found             |
  | `500 Internal Server Error` | Internal Server Error |



