import { Request, Response } from "express";
import { TLoginReturn } from "../interfaces";
import { loginServices } from "../services";

const create = async (req: Request, res: Response): Promise<Response> => {
  const token: TLoginReturn = await loginServices.create(req.body);
  return res.status(200).json(token);
};

export default { create };
