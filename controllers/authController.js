const { generateToken } = require("../middleware/auth");
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
const loginHandler = async (req, res) => {
    //1
    const { email, password } = req.body;
    if (!email || !password) {
        return res.json({
            success: false,
            message: "missing fields"
        })
    }

    const user = await User.findOne({ email });
    if (!user) {
        return res.json({
            success: false,
            message: "user does not exist"
        })
    }

    //password compare

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
        return res.json({
            success: false,
            message: "invalid credentials"
        })
    }

    // jwt issue
    let payload = { _id: user.id, role: user.role };
    let token = generateToken(payload);
    res.json({
        success: true,
        token,
        message: "user logged in successfully",
        data: {
            _id: user._id,
            role: user.role,
            name: user.name,
            email: user.email
        }
    })
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