const mongoose = require("mongoose");

const schema = mongoose.Schema;

const medicine = new schema({
  name: {
    type: String,
    require: [true, "name is empty"],
  },
  mg:{
    type:String
  },
  numberofpieces: {
    type: Number,
    require: [true, "pieces not difine"],
  },
  disease: {
    type: String,
  },
  expiry_date: {
    type: Date,
    require: [true, "expriry date is empty"],
  },
  discription: {
    type: String,
    require: [true, "discription is empty"],
  },
  donate_state: {
    type: Boolean,
    default: false,
    require: [true, "discription is empty"],
  },
});

module.exports = mongoose.model("medicine", medicine);
