    const mongoose = require('mongoose');
    const userSchema = mongoose.Schema({
        name: String,
        age: Number,
        email :String,
        password:String,
        role:{
            type:String ,
            enum:['admin','user']
        }
    })

    const User = mongoose.model("Users", userSchema)

    module.exports = User;