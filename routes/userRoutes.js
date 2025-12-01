const express = require('express');

const userRouter = express.Router();
const { getAll, updateUser, updateUserByParts, deleteUser, addUser } = require("../controllers/userController");
const { protect } = require('../middleware/auth');

userRouter.route("/").get(getAll).post(addUser);
userRouter.route("/:id").put(updateUser).patch(updateUserByParts).delete(deleteUser)




module.exports = userRouter;