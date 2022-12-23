const mongoose = require("mongoose");

const user = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is Empty"],
  },
  number: {
    type: Number,
    required: [true, "Number is Empty"],
  },
  email: {
    type: String,
    required: [true, "Email is Empty"],
    unique: [true, "Email must be unique"],
  },
  password: {
    type: String,
    required: [true, "Password is Empty"],
  },
  role: {
    type: String,
    defaultValue: "user",
  },
});

module.exports = mongoose.model("user", user);
