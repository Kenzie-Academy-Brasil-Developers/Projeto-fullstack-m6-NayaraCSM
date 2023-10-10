import { z } from "zod";
import { commentCreateSchema } from "../schemas";
import { DeepPartial } from "typeorm";
import { Comment } from "../entities";

type TCommentCreate = z.infer<typeof commentCreateSchema>;
type TCommentUpdate = DeepPartial<Comment>;

export { TCommentCreate, TCommentUpdate };
