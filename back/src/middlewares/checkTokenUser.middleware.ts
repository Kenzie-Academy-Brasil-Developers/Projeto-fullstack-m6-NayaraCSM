import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";

const checkTokenUser = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const isAdvertiser: boolean = res.locals.isAdvertiser;
  const tokenUser: number = res.locals.id;
  const userId: number = parseInt(req.params.id);

  if (!isAdvertiser) {
    if (tokenUser != userId) {
      throw new AppError("Insufficient permission", 403);
    }
  }
  return next();
};

export default checkTokenUser;
