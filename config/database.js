const mongoose = require("mongoose")

function connectDB() {
    mongoose.connect(process.env.MONGO_URI).then(() => {
        console.log("connected")
    }).catch((err) => {
        console.log("error", err)
    })
}

module.exports = connectDB;