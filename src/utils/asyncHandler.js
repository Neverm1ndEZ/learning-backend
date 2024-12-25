const asyncHandler = (fn) => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (error) {
    req.status(error.status || 500).json({
      success: false,
      message: error.message,
    });
  }
};

export { asyncHandler };
