import { logger } from "./logger.middleware.js";
export class CustomError extends Error {
  constructor(statusCode, errMessage) {
    super(errMessage);
    this.statusCode = statusCode;
  }
}

export const errorHandlerMiddleware = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  logger.error({
    level: 'error',
    timestamp: new Date().toString(),
    "request URL": req.originalUrl,
    "error message": err.message
  });

  res.status(statusCode).json({
    status: "error",
    statusCode,
    message: statusCode === 500
      ? "Oops! Something went wrong... Please try again later!"
      : err.message
  });
};
