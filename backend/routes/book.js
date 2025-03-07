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

//Route to update book by id
router.put('/:id', async (req,res) => {
    try{
        if(!req.body.title || !req.body.author || !req.body.publishYear) {
            console.log('Not all fields completed!')
            return res.status(400).send({message: "All field required!"})
        }

        const updatedBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear
        }
        await Book.findByIdAndUpdate(req.params.id, updatedBook)
        console.log('Book updated!')
        res.status(200).send({message: "Book updated!"})
    } catch (err) {
        console.log(err.message);
        res.status(500).send({message:err.message})
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

//Route for deleting book 
router.delete('/:id', async (req,res) => {
    
    try {
        const bookDelete = await Book.findByIdAndDelete(req.params.id);
    if(bookDelete) {
        console.log("Book's been deleted!")
        res.status(200).send({message: "Book has been deleted!"})
    }
    res.status(404).send({message: 'Error deleting that book'})
        } catch (err) {
            console.log(err.message)
            res.status(500).send(err.message)
        }

})

module.exports = router;