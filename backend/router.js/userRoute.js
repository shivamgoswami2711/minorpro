const express = require("express");
const { newUser, emailchack, login } = require("../action/userAction");
const userRoute = express.Router();
userRoute.route("/new").post(newUser)
userRoute.route("/email").post(emailchack)
userRoute.route("/login").post(login)
module.exports = userRoute