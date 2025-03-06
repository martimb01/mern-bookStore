//Importing dependencies
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose')
const connectToDB = require('./db.js')
const Book = require('./models/bookModel.js')
dotenv.config(); //Loading env variables

const app = express();

//Route for saving new Book
app.post('/books', async (req,res) => {
    try {

    } catch (err) {
        console.log(err.message);
        res.status(500).send({message: err.message})
    }
})




const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    connectToDB()
    console.log(`Server listening on port: ${PORT}`)
})