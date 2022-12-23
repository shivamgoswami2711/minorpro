const mongoose = require("mongoose");
const schema = mongoose.Schema;

const donatrequest = new schema({
  name: {
    type: String,
    require: [true, "name is empty"],
  },
  number:{
    type:Number,
    require:[true,"number is empty"]
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
        type:Number,
        require: [true, "dose not define"],
      },
      numberofpieces:{
        type:Number,
        require: [true, "pieces not define"],
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
      conform:{
        type: Boolean,
        default: false
      }
    },
  ],
  note: {
    type: String,
  },
  pickupStatus: {
    type: Boolean,
    default: false
  },
  pickupDate: {
    type: Date,
    require: [true, "pickup Date is empty"],
  },
});

module.exports = mongoose.model("donatrequest", donatrequest);
