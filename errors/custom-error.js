class CustomAPIError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}

const customErrorMessage = (msg, statusCode) => {
    return new CustomAPIError(msg, statusCode)
}

module.exports = { customErrorMessage, CustomAPIError }