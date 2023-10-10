import { Request, Response } from "express";
import { commentServices } from "../services";
import { TCommentUpdate } from "../interfaces";

const create = async (req: Request, res: Response): Promise<Response> => {
  const payload = req.body;
  const userId = res.locals.id;
  const anouncementId = Number(req.params.id);
  const comment = await commentServices.create(payload, userId, anouncementId);
  return res.status(201).json(comment);
};

const readByAnouncementId = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const anouncementId = Number(req.params.id);
  const comments = await commentServices.readByAnouncementId(anouncementId);

  return res.status(200).json(comments);
};

const update = async (req: Request, res: Response): Promise<Response> => {
  const commentId = Number(req.params.id);
  const payload: TCommentUpdate = req.body;
  const comment = await commentServices.update(commentId, payload);

  return res.status(200).json(comment);
};

const destroy = async (req: Request, res: Response) => {
  const commentId = Number(req.params.id);
  await commentServices.destroy(commentId);
  res.status(204).send();
};

export default {
  create,
  readByAnouncementId,
  update,
  destroy,
};
