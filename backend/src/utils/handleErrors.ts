import type { NextFunction, Request, RequestHandler, Response } from "express";

type AsyncRequestHandler = (req: Request, res: Response, next: NextFunction) => Promise<unknown>;

const catchAsync = (fn: AsyncRequestHandler): RequestHandler => {
  return (req, res, next: NextFunction) => {
    fn(req, res, next).catch((err: unknown) => {
      next(err);
    });
  };
};

export { catchAsync };
