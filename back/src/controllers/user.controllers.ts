import { Request, Response } from "express";
import { User } from "../entities";
import { userServices } from "../services";
import { TUserUpdate } from "../interfaces";

const create = async (req: Request, res: Response): Promise<Response> => {
  console.log(req.body);
  const user: User = await userServices.create(req.body);
  return res.status(201).json(user);
};

const update = async (req: Request, res: Response): Promise<Response> => {
  const payload: TUserUpdate = req.body;
  const foundUser: User = res.locals.foundEntity;

  const user = await userServices.update(foundUser, payload);

  return res.status(200).json(user);
};

const destroy = async (req: Request, res: Response): Promise<Response> => {
  await userServices.destroy(res.locals.foundEntity);
  return res.status(204).json();
};

export default { create, update, destroy };
