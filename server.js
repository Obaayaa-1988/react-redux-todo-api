const express = require("express");
const mongoose = require("mongoose")
const dotenv = require("dotenv").config()
require('dotenv').config();
const cookieParser = require("cookie-parser")

const app = express();
const PORT = process.env.PORT || 5040





app.use(cookieParser());
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}));



const mongoUrl = process.env.MongoURL;

mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology : true })
.then(result => {
    if(result)
    console.log("connected to todo-mongo: successful")
}).catch(err => {
    console.log(err)
})



app.listen(PORT, () => console.log(`server running on port ${PORT} `));