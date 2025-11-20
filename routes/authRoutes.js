const express = require('express');
const { registerHandler, loginHandler, logoutHandler, meHandler } = require('../controllers/authController');

const authRouter = express.Router();


authRouter.route("/register").post(registerHandler);
authRouter.route("/login").post(loginHandler);
authRouter.route("/logout").post(logoutHandler);
authRouter.route("/me").get(meHandler);

module.exports = authRouter