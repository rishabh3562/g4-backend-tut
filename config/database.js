const mongoose = require("mongoose")

function connectDB() {
    mongoose.connect("mongodb://localhost:27017/blogdb24").then(() => {
        console.log("connected")
    }).catch((err) => {
        console.log("error", err)
    })
}

module.exports = connectDB;