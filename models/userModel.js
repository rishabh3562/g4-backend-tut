const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const userSchema = mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    password: String,
    role: {
        type: String,
        enum: ['admin', 'user']
    }
})
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next();
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(this.password, salt);
    this.password = hash;
    next();
})
const User = mongoose.model("Users", userSchema)

module.exports = User;