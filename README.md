# mybook-app

This **backend** folder contains the logic of the full stack web application **MyBook**.
The application will allow users to keep track of the books they read, and give them a rating and a review.  

Here a RESTful api is created using NodeJS and MySQL database.
The routing logic is developed using ExpressJS web framework.
Queries to relation database are made through the adoption of **Sequelize**, an Object-relational mapping (ORM) tool that utilizes Node.js and JavaScript object syntax to accomplish the mapping with databases. It allows to create models in order to define the database schema and build references between tables.  

> **Note:** At the moment, only Book and Review models have been created. Next step is to create the User model and the logic for is authentication and authorization

This API consumes the full range of CRUD operations against the database through 5 endpoints:

- Create
- Read all
- Read one
- Update
- Delete

The backend is dockerized with the use of ***Dockerfile*** and an instance of MySQL is deployed inside a Docker container as well.

A ***docker-compose.yml*** file is used to run both services. 


## Clone the repo to your local machine

```
cd backend
```
Run `npm install` inside the backend directory.

Then go back to the root directory and run  `docker-compose up --build`

## Test the endpoints with Postman

Test that the connection is working by making a GET request to 

`localhost:5000/api`

If you see the ***Hello World*** respond you are good to start testing the other endpoints.
You can find the endpoints in  `routes/books.js`

If you get a null response, when making a POST request, make sure to have `x-www-urlencoded` as data form in Postman.

## Improvements

Follow the Test Driven Development (TDD) practices.

- TO DO: write tests to test the endpoints 

## Next steps

- Build the front-end using React library and containerize it
- Host each service on a serveless cloud service like GCP Cloud Run or AWS ECS to provide high availability