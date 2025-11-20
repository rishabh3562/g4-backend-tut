const express = require('express');

const userRouter = express.Router();
const { getAll, updateUser, updateUserByParts, deleteUser, addUser } = require("../controllers/userController")

userRouter.route("/users").get(getAll).post(addUser);
userRouter.route("/users/:id").put(updateUser).patch(updateUserByParts).delete(deleteUser)




module.exports = userRouter;