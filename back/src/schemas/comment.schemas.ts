import { z } from "zod";

const commentSchema = z.object({
  id: z.number().positive(),
  comment: z.string().max(20),
});

const commentCreateSchema = commentSchema.omit({
  id: true,
});

const commentUpdateSchema = commentSchema.omit({ id: true }).partial();

export { commentSchema, commentCreateSchema, commentUpdateSchema };
