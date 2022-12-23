const { CatchAsyncError } = require("../middleware/error/CatchAsyncError");
const donatrequest = require("../module/donatrequest");
const ErrorHeandler = require("../middleware/error/ErrorHeandler");
const medicine = require("../module/medicine");

exports.create = CatchAsyncError(async (req, res, next) => {
  console.log(req.body);
  const data = await donatrequest.create(req.body);
  console.log(data);
  res.status(201).json({
    massage: "success",
    data,
  });
});

exports.getAllData = CatchAsyncError(async (req, res, next) => {
  const data = await donatrequest.find({pickupStatus:false})
  res.status(200).json({
    massage: "success",
    data,
  });
});

exports.pickup = CatchAsyncError(async (req, res, next) => {
  console.log(req.params.id)
  const data = await donatrequest.findByIdAndUpdate(
    req.params.id,
    { pickupStatus: true },
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );
  if (!data) {
    return next(new ErrorHeandler(404, "data not found"));
  } else {
    const medicineData = data.medicine;
    const updateData = await medicine.create(medicineData);
  }
  res.status(201).json({ massage: "success", data });
});
