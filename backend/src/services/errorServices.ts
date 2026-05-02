import type { Request } from "express";

export const globalErrorHandler = (
  err: any,
  req: Request,
  res: any,
  next: any,
) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  return res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
};
