const express = require('express')
const Book = require('../models/bookModel')

//Creating Router
const router = express.Router()


//Route to get all books
router.get('/', async (req,res) => {
    try{
    const books = await Book.find({});
    console.log("All books sent!")
    res.status(200).send({
        count: books.length,
        data: books
    })

    }catch (err) {
        console.log(err.message)
        res.status(500).send({message: err.message})
    }
})

//Route go get book by id 
router.get ('/:id', async (req,res) => {
    try {
        const book = await Book.findById(req.params.id)
        console.log('Books by that id found!')
        res.status(200).send(book)
    } catch (err) {
        console.log(err.message);
        res.status(404).send({ message: "Book does not exist"})

    }
})

//Route for saving new Book
router.post('/', async (req,res) => {
    try {
        if (!req.body.title ||
            !req.body.author ||
            !req.body.publishYear) {
                console.log('Book does not have all fields')
                return res.status(400).send({
                    message:"All field required!"
                })
            }
        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear
        }
        console.log('Book created!')
        const book = await Book.create(newBook);
        return res.status(201).send(book)

    } catch (err) {
        console.log(err.message);
        res.status(500).send({message: err.message})
    }
})

module.exports = router;