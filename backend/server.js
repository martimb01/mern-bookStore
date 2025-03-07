//Importing dependencies
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose')
const connectToDB = require('./db.js')
const Book = require('./models/bookModel.js')
dotenv.config(); //Loading env variables
//Importing routers
const bookRouter = require('./routes/book.js')

//Starting express app
const app = express();

//Middleware for parsing request body
app.use(express.json());



//Setting up routers
app.use('/books', bookRouter)


//Setting port and Initializing server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    connectToDB()
    console.log(`Server listening on port: ${PORT}`)
})