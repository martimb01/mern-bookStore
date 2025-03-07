const express = require('express')
const Book = require('../models/bookModel')
const {getAllBooks, getBookById, createBook, 
       deleteBookById, updateBookById} = require('../controllers/book.js')

//Creating Router
const router = express.Router()


//Route to get all books
router.get('/', getAllBooks )

//Route go get book by id 
router.get ('/:id', getBookById )

//Route to update book by id
router.put('/:id', updateBookById )

//Route for saving new Book
router.post('/', createBook )

//Route for deleting book 
router.delete('/:id', deleteBookById  )

module.exports = router;