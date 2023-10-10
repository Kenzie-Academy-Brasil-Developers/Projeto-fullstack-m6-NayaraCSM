import { z } from "zod";

const commentSchema = z.object({
  id: z.number().positive(),
  user: z.object({ id: z.number(), name: z.string() }),
  anouncement: z.object({ id: z.number() }),
  comment: z.string().max(500),
  createdAt: z.string(),
});

const commentCreateSchema = commentSchema.omit({
  id: true,
  user: true,
  anouncement: true,
  createdAt: true,
});

const commentUpdateSchema = commentSchema
  .omit({ id: true, user: true, anouncement: true, createdAt: true })
  .partial();

export { commentSchema, commentCreateSchema, commentUpdateSchema };
