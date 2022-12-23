const CatchAsyncError = require("../middleware/error/CatchAsyncError");
const ErrorHeandler = require("../middleware/error/ErrorHeandler");
const mrequest = require("../module/mrequest");

exports.create = CatchAsyncError(async (req, res, next) => {
    const data = await mrequest.create(req.body);
    res.status(201).json({
      massage: "success",
      data,
    });
});
