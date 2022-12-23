const mongoose = require("mongoose");

const schema = mongoose.Schema;

const donatModule = new schema({
  name: {
    type: String,
    require: [true, "name is empty"],
  },
  address: {
    type: String,
    require: [true, "address is empty"],
  },
  medicine: [
    {
      name: {
        type: String,
        require: [true, "name is empty"],
      },
      mg: {
        type: String,
      },
      numberofpieces: {
        type: Number,
        require: [true, "pieces not difine"],
      },
      expiry_date: {
        type: Date,
        require: [true, "expriry date is empty"],
      },
    },
  ],
});

module.exports = module.module("donatModule", donatModule);
