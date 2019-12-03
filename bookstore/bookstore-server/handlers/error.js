//Generic function to get an error from the server or a 500 error message
function errorHandler(error, request, response, next) {
    return response.status(error.status || 500).json({
        error: {
            message: error.message || "Either something is wrong, or you are working me."
        }
    });
}

module.exports = errorHandler;