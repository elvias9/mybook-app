const db = require('../models')

// model
//const Book = db.products
const Review = db.reviews

// CRUD 

const addReview = (req, res, next) => {
  console.log(req.body, req.params.bookId )
    const bookId = req.params.bookId
    const { rating, description} = req.body;
    Review.create({
      bookId,
      rating,
      description
    })
      .then(review => {
        console.log('Review created with rating', rating);
        res.status(201).json(review);
        })
      .catch(err => {
        next(err);
      }); 
}


const deleteReview = (req, res, next) => {
  const reviewId = req.params.reviewId;
  Review.findByPk(reviewId)
    .then(review => {
      console.log(review.reviewId)
      if (!review) {
        return res.status(404).json({ message: 'User not found!' });
      }
      return Review.destroy({
        where: {
          reviewId: reviewId
        }
      });
    })
    .then(result => {
      res.status(200).json({ message: 'Review deleted!' });
    })
    .catch(err => console.log(err));
}

module.exports = { addReview, deleteReview };





