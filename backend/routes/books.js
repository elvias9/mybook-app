const express = require('express');
const router = require('express').Router();

router.use(express.json());

const bookControllers = require("../controllers/books");
const reviewControllers = require('../controllers/reviews');

router.get('/', (req, res) => {
    res.json('Hello World');
  });

// CRUD Routes /books
router.get('/books', bookControllers.getBooks); 
router.get('/books/:bookId', bookControllers.getBook); 
router.post('/books', bookControllers.createBook); 
router.put('/books/:bookId', bookControllers.updateBook); 
router.delete('/books/:bookId', bookControllers.deleteBook); 
router.get('/bookReviews/:bookId', bookControllers.getBookReviews)

// reviews routes

router.post('/addReview/:bookId', reviewControllers.addReview);
router.delete('/review/:reviewId', reviewControllers.deleteReview); 


module.exports = router;
