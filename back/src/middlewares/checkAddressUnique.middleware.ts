import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";
import { TAddress } from "../interfaces";
import { addressRepository } from "../repositories";

const checkAddressUnique = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  console.log(req.body.address);
  const address: TAddress = req.body.address;
  const addressFind = await addressRepository.findOneBy({
    ...address,
    number: address.number || "",
    complement: address.complement || "",
  });

  if (addressFind) throw new AppError("Address already exists", 409);

  return next();
};

export default checkAddressUnique;
