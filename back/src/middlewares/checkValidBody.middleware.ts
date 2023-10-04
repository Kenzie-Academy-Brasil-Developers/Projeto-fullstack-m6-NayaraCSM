import { NextFunction, Request, Response } from "express";
import { ZodTypeAny } from "zod";

const checkValidBody =
  (schema: ZodTypeAny) =>
  (req: Request, res: Response, next: NextFunction): void => {
    console.log(req.body);
    req.body = schema.parse(req.body);
    return next();
  };

export default checkValidBody;
