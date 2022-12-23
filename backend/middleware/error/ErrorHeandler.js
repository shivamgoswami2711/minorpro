class ErrorHandler extends Error{
    constructor(StatusCode,massage){
        super(massage)
        this.StatusCode = StatusCode;
        Error.captureStackTrace(this, StatusCode);
    }
}
module.exports = ErrorHandler;
