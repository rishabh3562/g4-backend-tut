const User = require("../models/userModel");

const registerHandler = async (req, res) => {
    // 1
    const { name, age, email, password, role } = req.body;

    // 3
    const data = new User({
        name: name,
        age: age,
        email: email,
        password: password,
        role: role
    })
    const savedUser = await data.save();
    // 4
    res.json({
        success: true,
        data: savedUser
    })
    // 5
}
const loginHandler = (req, res) => {

}
const logoutHandler = (req, res) => {

}
const meHandler = (req, res) => {

}


module.exports = {
    registerHandler,
    loginHandler,
    logoutHandler,
    meHandler

}