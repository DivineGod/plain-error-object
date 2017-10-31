function plainError(error) {
    if (!error || !error.stack) {
        return error;
    }

    var result = {};

    result.message = error.message;
    result.name = error.name;
    result.stack = error.stack;
    result.code = error.code;
    result.signal = error.signal;

    return result;
}

module.exports = plainError;
