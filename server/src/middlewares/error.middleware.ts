import ApiException from "../exceptions/api.exception.js";
import { NextFunction, Request, Response } from "express";

export default (err, req: Request, res: Response, next: NextFunction) => {
  console.log(err);
  if (err instanceof ApiException) {
    return res
      .status(err.status)
      .json({ message: err.message, errors: err.errors });
  }
  return res.status(500).json({ message: "Непредвиденная ошибка" });
};
