require("dotenv").config()

const mongoose = require('mongoose');

const URI = process.env.DATABASE_URL;

// const URI = "mongodb+srv://dbUser:dbUser123@cluster0.xwfe0.mongodb.net/<dbname>?retryWrites=true&w=majority"

const connectDB = async () => {
    await mongoose.connect(URI, { useUnifiedTopology: true, useNewUrlParser: true });
    console.log('db connected!!')
}

module.exports = connectDB;