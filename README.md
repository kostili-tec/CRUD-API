# CRUD-API

This repository contains a CRUD API implementation.

## Installation

To get started with the project, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/kostili-tec/CRUD-API.git
   ```
2. Switch to the `develop` branch:
   ```
   git switch develop
   ```
3. Install dependencies:
   ```
   npm install
   ```

## Usage

To use the API, follow the instructions below:

### Endpoints

- **GET method:**

  - Get all users:
    ```
    GET /api/users
    ```

  - Get user by ID:
    ```
    GET /api/users/{userId}
    ```

- **POST method:**

  - Create a new user:
    ```
    POST /api/users
    ```
    Provide the user data in the request body. For example:
    ```json
    {
        "username": "Josh Homme",
        "age": 50,
        "hobbies": ["playing guitar"]
    }
    ```

- **PUT method:**

  - Update user by ID:
    ```
    PUT /api/users/{userId}
    ```
    Provide the updated user data in the request body. For example:
    ```json
    {
        "username": "Spiridon",
        "age": 69,
        "hobbies": ["playing videogames"]
    }
    ```

- **DELETE method:**

  - Delete user by ID:
    ```
    DELETE /api/users/{userId}
    ```

Make sure to use Postman or a similar tool and use the following base URL: 

```
http://localhost:5001
```
