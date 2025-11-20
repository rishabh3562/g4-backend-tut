    const mongoose = require('mongoose');
    const userSchema = mongoose.Schema({
        name: String,
        age: Number,
    })

    const User = mongoose.model("Users", userSchema)

    module.exports = User;