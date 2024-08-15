export const CatchError = (error, res) => {
  return res.status(error.statusCode || 500).json({
    message: error.message,
    status: error.status,
  });
};