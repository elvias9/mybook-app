const express = require("express");
const app = express();
const cors = require("cors");

//MiddleWare
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//app.use(cors("*"))


//CRUD routes
const routes = require('./routes/books');
app.use('/api', routes)

//error handling
app.use((error, req, res, next) => {
    console.log('This is the error', error);
    const status = error.statusCode || 500;
    const message = error.message;
    res.status(status).json({ message: message });
  });


module.exports = app;


