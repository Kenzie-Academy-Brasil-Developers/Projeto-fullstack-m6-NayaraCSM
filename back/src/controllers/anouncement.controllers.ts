import { Request, Response } from "express";
import { Anouncement } from "../entities";
import { anouncementServices } from "../services";
import { TAnouncementUpdate } from "../interfaces";

const create = async (req: Request, res: Response): Promise<Response> => {
  const payload = req.body;
  const userId = res.locals.id;
  const anouncement = await anouncementServices.create(payload, userId);
  return res.status(201).json(anouncement);
};

const readAll = async (req: Request, res: Response): Promise<Response> => {
  const anouncements = await anouncementServices.readAll();
  return res.status(200).json(anouncements);
};

const readByUserId = async (req: Request, res: Response): Promise<Response> => {
  const userId = Number(req.params.id);
  const anouncements = await anouncementServices.readByUserId(userId);

  return res.status(200).json(anouncements);
};

const readByAnouncementId = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const anouncementId = Number(req.params.id);
  const anouncements = await anouncementServices.readByAnouncementId(
    anouncementId
  );

  return res.status(200).json(anouncements);
};

const update = async (req: Request, res: Response): Promise<Response> => {
  const anouncementId = Number(req.params.id);
  const payload: TAnouncementUpdate = req.body;
  const anouncement = await anouncementServices.update(anouncementId, payload);

  return res.status(200).json(anouncement);
};

const destroy = async (req: Request, res: Response) => {
  const anouncementId = Number(req.params.id);
  await anouncementServices.destroy(anouncementId);
  res.status(204).send();
};

export default {
  create,
  readAll,
  readByUserId,
  readByAnouncementId,
  update,
  destroy,
};
