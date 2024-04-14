//const Book = require('../models/books');
const db = require('../models')

const Book = db.books
const Review = db.reviews


const getBooks = (req, res, next) => {
  Book.findAll()
      .then(books => {
          res.status(200).json({ books: books });
      })
      .catch(err => console.log(err));
}

const createBook = (req, res, next) => {
  console.log(req.body)
    const { title, author} = req.body;
    Book.create({
      title,
      author
    })
      .then(book => {
        console.log('Book created with name', title);
        res.status(201).json(book);
        })
      .catch(err => {
        next(err);
      }); 
}

const getBook = (req, res, next) => {
  const bookId = req.params.bookId;
  Book.findByPk(bookId)
      .then(book => {
          if (!book) {
              return res.status(404).json({ message: 'Book not found!' });
          }
          res.status(200).json({ book: book });
      })
      .catch(err => console.log(err));
}

const updateBook = (req, res, next) => {
  const bookId = req.params.bookId;
  const updatedTitle = req.body.title;
  const updatedAuthor = req.body.author;
  Book.findByPk(bookId)
    .then(book => {
      if (!book) {
        return res.status(404).json({ message: 'User not found!' });
      }
      book.title = updatedTitle;
      book.author = updatedAuthor;
      return book.save();
    })
    .then(result => {
      res.status(200).json({message: 'Book updated!', Book: result});
    })
    .catch(err => console.log(err));
}


const deleteBook = (req, res, next) => {
  const bookId = req.params.bookId;
  Book.findByPk(bookId)
    .then(book => {
      if (!book) {
        return res.status(404).json({ message: 'Book not found!' });
      }
      return Book.destroy({
        where: {
          bookId: bookId
        }
      });
    })
    .then(result => {
      res.status(200).json({ message: 'Book deleted!' });
    })
    .catch(err => console.log(err));
}

const getBookReviews = (req, res) => {
  const bookId = req.params.bookId;
  Book.findOne({
          include: [{
              model: Review,
              as: 'review'
          }],
          where: { bookId: bookId }
      })
      .then(book => {
        if (!book) {
            return res.status(404).json({ message: 'Book not found!' });
        }
        res.status(200).json({ book: book.review});
    })
    .catch(err => console.log(err));
}


module.exports = {getBooks, createBook, getBook, updateBook, deleteBook, getBookReviews};
  
