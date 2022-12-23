module.exports = (err, req, res, next) => {
    err.StatusCode = err.StatusCode || 500;
    err.message = err.message || "internal servar error";
    res.status(err.StatusCode).json({
        success:false,
        message:err.message
    })
}
