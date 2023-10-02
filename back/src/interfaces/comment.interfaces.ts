import { z } from "zod";
import { commentCreateSchema, commentReadSchema } from "../schemas";
import { DeepPartial } from "typeorm";
import { Comment} from "../entities";

type TcommentCreate = z.infer<typeof commentCreateSchema>;
type TcommentRead = z.infer<typeof commentReadSchema>;
type TcommentUpdate = DeepPartial<Comment>;

export { TcommentCreate, TcommentRead, TcommentUpdate };
