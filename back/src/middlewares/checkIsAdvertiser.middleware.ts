import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";

const checkIsAdvertiser = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const advertiser: boolean = res.locals.decoded.isAdvertiser;
  if (!advertiser) throw new AppError("Insufficient permission", 403);

  return next();
};

export default checkIsAdvertiser;
