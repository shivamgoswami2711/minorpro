const mongoose = require("mongoose");

const mrequest = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "name is empty"],
  },
  number: {
    type: Number,
    require: [true, "number is empty"],
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
      donatedStatus: {
        type: Boolean,
      },
    },
  ],
  note: {
    type: String,
  },
});

module.exports = mongoose.model("mrequest", mrequest);
