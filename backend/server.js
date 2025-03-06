//Importing dependencies
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose')
const connectToDB = require('./db.js')

dotenv.config(); //Loading env variables

const app = express();

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    connectToDB()
    console.log(`Server listening on port: ${PORT}`)
})