class ApiError extends Error {
  constructor(statusCode, message, errors, stack) {
    super(message);
    this.statusCode = statusCode;
    this.errors = errors;
    this.data = null;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };
