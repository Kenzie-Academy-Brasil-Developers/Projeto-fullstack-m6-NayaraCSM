import { NextFunction, Request, Response } from "express";
import { User } from "../entities";
import { userRepository } from "../repositories";
import { AppError } from "../errors";

const checkIdExist = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const id: number = Number(req.params.id);

  const foundEntity: User | null = await userRepository.findOneBy({ id });
  if (!foundEntity) throw new AppError("Not found", 404);

  res.locals = { ...res.locals, foundEntity };

  return next();
};

export default checkIdExist;
