function errorHandler(error, req, res, next) {
  let statusCode = error.statusCode || 500
  let message = error.message || 'An unexpected error occurred.'

  if (error.name === 'CastError') { statusCode = 404; message = 'Resource not found.' }
  if (error.code === 11000) { statusCode = 409; message = 'A record with this value already exists.' }
  if (error.name === 'ValidationError') { statusCode = 400; message = Object.values(error.errors).map((item) => item.message).join(' ') }

  if (process.env.NODE_ENV === 'production' && !error.isOperational && statusCode === 500) message = 'An unexpected error occurred.'
  res.status(statusCode).json({ success: false, message, ...(process.env.NODE_ENV !== 'production' && { stack: error.stack }) })
}

module.exports = errorHandler
