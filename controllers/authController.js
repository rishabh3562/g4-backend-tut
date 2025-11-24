const User = require("../models/userModel");

const registerHandler = async (req, res) => {
    try {
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
    } catch (err) {
        res.json({
            success: false,
            error: err.message
        })
    }
    // 5
}
const loginHandler = (req, res) => {
    //1
    const { email, password } = req.body;
    if(!email || !password ){
        return res.json({
            success:false,
            message:"missing fields"
        })
    }
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