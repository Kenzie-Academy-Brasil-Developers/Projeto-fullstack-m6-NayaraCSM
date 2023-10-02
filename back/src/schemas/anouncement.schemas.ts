import { z } from "zod";

const imageSchema = z.object({
  id: z.number().positive(),
  image: z.string().max(500),
});

const anouncementSchema = z.object({
  id: z.number().positive(),
  brand: z.string().max(20),
  model: z.string().max(50),
  year: z.number().int().positive(),
  fuel: z.string().max(20),
  mileage: z.number().default(0).or(z.string().default("0")),
  color: z.string().max(20),
  fipePrice: z.number().default(0).or(z.string().default("0")),
  price: z.number().default(0).or(z.string().default("0")),
  description: z.string().max(150).nullish(),
  image: imageSchema,
});

const anouncementCreateSchema = anouncementSchema.omit({
  id: true,
});

const anouncementUpdateSchema = anouncementSchema
  .omit({ id: true })
  .partial();

export {
  anouncementSchema,
  imageSchema,
  anouncementCreateSchema,
  anouncementUpdateSchema,
};
