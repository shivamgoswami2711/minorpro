const { CatchAsyncError } = require("../middleware/error/CatchAsyncError");
const donatrequest = require("../module/donatrequest");
const medicine = require("../module/medicine");

exports.create = CatchAsyncError(async (req, res, next) => {
  const data = await medicine.create(req.body);
  console.log(req.body);
  const updateConform = await donatrequest.updateOne(
    {
      "medicine._id": req.body.medicineId,
    },
    {
      $set: {
        "medicine.$.conform": true,
      },
    }
  );
  res.status(201).json({
    massage: "success",
    data,
  });
});
exports.getMedicine = CatchAsyncError(async (req, res, next) => {
  // const data = await medicine.find(req.body);
  console.log(req.body)
  res.status(200).json({
    massage: "success",
    // data,
  });
});
