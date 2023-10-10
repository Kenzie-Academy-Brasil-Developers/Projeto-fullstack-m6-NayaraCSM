import { Anouncement, User } from "../entities";
import { AppError } from "../errors";
import { TCommentCreate, TCommentUpdate } from "../interfaces";
import {
  anouncementRepository,
  commentRepository,
  userRepository,
} from "../repositories";
import { commentSchema, commentUpdateSchema } from "../schemas";

const create = async (
  payload: TCommentCreate,
  userId: number,
  anouncementId: number
) => {
  const { ...rest } = payload;
  const user: User = (await userRepository.findOneBy({ id: userId }))!;
  const anouncement: Anouncement = (await anouncementRepository.findOneBy({
    id: anouncementId,
  }))!;

  if (!user) {
    throw new AppError("User not found", 404);
  }

  if (!anouncement) {
    throw new AppError("Anouncement not found", 404);
  }

  const comment = commentRepository.create({
    ...rest,
    user: user,
    anouncement: anouncement,
  });

  await commentRepository.save(comment);

  return commentSchema.parse(comment);
};

const readByAnouncementId = async (anouncementId: number) => {
  const anouncement = await anouncementRepository.findOne({
    where: {
      id: anouncementId,
    },
    relations: {
      comment: true,
    },
  });
  if (!anouncement) {
    throw new AppError("Anouncement not found", 404);
  }
  const comments = await commentRepository.find({
    where: {
      anouncement: {
        id: anouncementId,
      },
    },
    relations: ["user", "anouncement"],
  });

  return comments;
};

const update = async (commentId: number, payload: TCommentUpdate) => {
  const comment = await commentRepository.findOne({
    where: {
      id: commentId,
    },
  });

  if (!comment) {
    throw new AppError("Comment not found", 404);
  }

  const commentUpdate = commentRepository.create({
    ...comment,
    ...payload,
  });

  await commentRepository.save(commentUpdate);

  return commentUpdateSchema.parse(commentUpdate);
};

const destroy = async (commentId: number): Promise<void> => {
  const comment = await commentRepository.findOneBy({
    id: commentId,
  });

  if (!comment) {
    throw new AppError("Comment not found", 404);
  }

  await commentRepository.remove(comment);
};

export default {
  create,
  readByAnouncementId,
  update,
  destroy,
};
