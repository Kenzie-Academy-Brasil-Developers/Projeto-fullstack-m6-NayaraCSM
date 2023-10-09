import { z } from "zod";

const imageSchema = z.object({
  id: z.number().positive(),
  image: z.string().max(500),
});

const imageCreateSchema = imageSchema.omit({
  id: true,
});

const imageUpdateSchema = imageSchema.omit({ id: true }).partial();

const anouncementSchema = z.object({
  id: z.number().positive(),
  images: imageCreateSchema.array(),
  user: z.number().positive(),
  brand: z.string().max(20),
  model: z.string().max(50),
  year: z.string().max(4),
  fuel: z.string().max(20),
  mileage: z.number().default(0).or(z.string().default("0")),
  color: z.string().max(20),
  fipePrice: z.number().default(0).or(z.string().default("0")),
  price: z.number().default(0).or(z.string().default("0")),
  description: z.string().max(150).nullish(),
});

const anouncementCreateSchema = anouncementSchema.omit({
  id: true,
  user: true,
});

const anouncementReadSchema = anouncementSchema.array();

const anouncementReturnSchema = z.array(anouncementSchema);

const anouncementUpdateSchema = z
  .object({
    id: z.number().positive(),
    image: imageUpdateSchema.array(),
    user: z.number().positive(),
    brand: z.string().max(20),
    model: z.string().max(50),
    year: z.string().max(4),
    fuel: z.string().max(20),
    mileage: z.number().default(0).or(z.string().default("0")),
    color: z.string().max(20),
    fipePrice: z.number().default(0).or(z.string().default("0")),
    price: z.number().default(0).or(z.string().default("0")),
    description: z.string().max(150).nullish().optional(),
  })
  .omit({ id: true, user: true })
  .partial();

export {
  anouncementSchema,
  imageSchema,
  imageCreateSchema,
  anouncementCreateSchema,
  anouncementReadSchema,
  anouncementReturnSchema,
  anouncementUpdateSchema,
};
