const User = require("../models/userModel")
const getAll = async (req, res) => {
    let data = await User.find();
    res.json(data);
}

const addUser = async (req, res) => {
    let { name, age } = req.body;
    let data = new User({
        name: name,
        age: age
    })

    let savedUser = await data.save();
    res.json(savedUser)
}

const updateUser = async (req, res) => {
    let id = req.params.id;
    let { name, age } = req.body;
    let data = await User.findByIdAndUpdate(
        id,
        { name: name, age: age },
        { new: true }
    )
    res.json(data);
}
const updateUserByParts = async (req, res) => {
    let id = req.params.id;
    let updates = {};
    if (req.body.name) {
        updates.name = req.body.name;
    }
    if (req.body.age) {
        updates.age = req.body.age;
    }
    let data = await User.findByIdAndUpdate(
        id,
        updates,
        { new: true }
    )
    res.json(data);
}

const deleteUser = async (req, res) => {
    let id = req.params.id;

    let data = await User.findByIdAndDelete(id)
    res.json(data);
}
module.exports = {
    getAll,
    addUser,
    updateUser,
    updateUserByParts,
    deleteUser
};