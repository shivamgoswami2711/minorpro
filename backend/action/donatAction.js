const { CatchAsyncError } = require("../middleware/error/CatchAsyncError");
const donatModule = require("../module/donatModule")

exports.donate = CatchAsyncError(async (req, res, next) => {
    
    const data = await donatModule.create(req.body);
    res.status(201).json({
        massage:"success",
        data
    })
});
