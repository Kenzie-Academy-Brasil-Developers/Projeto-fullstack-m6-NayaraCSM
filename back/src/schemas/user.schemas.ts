import { z } from "zod";

const addressSchema = z.object({
  id: z.number().positive(),
  cep: z.number().positive(),
  state: z.string().max(2),
  city: z.string().max(50),
  street: z.string().max(70),
  number: z.number().int().positive().nullish(),
  complement: z.string().max(200).nullish(),
});

const userSchema = z.object({
  id: z.number().positive(),
  name: z.string().max(50),
  email: z.string().max(50).email(),
  password: z.string().max(120),
  cpf: z.number().int().positive(),
  phone: z.number().int().positive(),
  dateBirth: z.string().or(z.date()),
  description: z.string().max(150).nullish(),
  isAdvertiser: z.boolean().default(false),
  address: addressSchema,
});

const userCreateSchema = userSchema.omit({
  id: true,
});

const userReturnSchema = userSchema.omit({ password: true });

const userUpdateSchema = userSchema.omit({ id: true, isAdvertiser: true }).partial();

export {
  userSchema,
  addressSchema,
  userCreateSchema,
  userUpdateSchema,
  userReturnSchema,
};