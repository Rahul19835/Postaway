import winston from "winston";

export const logger = winston.createLogger({
  // Write your code here
  level: 'error',
  format: winston.format.combine(
    winston.format.timestamp({ format: 'ddd MMM DD YYYY HH:mm:ss [GMT]ZZ [(India Standard Time)]' }),
    winston.format.printf(({ level, message, timestamp }) => {
      return JSON.stringify({
        level,
        timestamp,
        message
      });
    })
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'error.log' })
  ]
});
