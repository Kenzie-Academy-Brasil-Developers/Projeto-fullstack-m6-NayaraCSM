import { Request, Response } from "express";
import { Anouncement } from "../entities";
import { anouncementServices } from "../services";
import { TAnouncementUpdate } from "../interfaces";

const create = async (req: Request, res: Response): Promise<Response> => {
  const payload = req.body;
  const userId = res.locals.userId;
  const anouncement = await anouncementServices.create(payload, userId);
  return res.status(201).json(anouncement);
};

const update = async (req: Request, res: Response): Promise<Response> => {
  const payload: TAnouncementUpdate = req.body;
  const foundUser: Anouncement = res.locals.foundEntity;

  const anouncement = await anouncementServices.update(foundUser, payload);

  return res.status(200).json(anouncement);
};

const destroy = async (req: Request, res: Response): Promise<Response> => {
  await anouncementServices.destroy(res.locals.foundEntity);
  return res.status(204).json();
};

export default { create, update, destroy };
