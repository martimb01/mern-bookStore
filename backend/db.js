const mongoose = require('mongoose')

//Connect to the DB
const connectToDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Connected to DB successfuly!')
    } catch (err) {
        console.log(err.message)
    }
}

module.exports = connectToDB;