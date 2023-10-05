import { z } from "zod";

const addressSchema = z.object({
  id: z.number().positive(),
  cep: z.string().max(8),
  state: z.string().max(2),
  city: z.string().max(50),
  street: z.string().max(70),
  number: z.string().max(6).nullish().optional(),
  complement: z.string().max(200).nullish().optional(),
});

const addressCreateSchema = addressSchema.omit({
  id: true,
});

const addressUpdateSchema = addressSchema.omit({ id: true }).partial();

const userSchema = z.object({
  id: z.number().positive(),
  address: addressCreateSchema,
  name: z.string().max(50),
  email: z.string().max(50).email(),
  password: z.string().max(120),
  cpf: z.string().max(11),
  phone: z.string().max(15),
  dateBirth: z.string(),
  description: z.string().max(150).nullish().optional(),
  isAdvertiser: z.boolean().default(false),
});

const userCreateSchema = userSchema.omit({
  id: true,
});

const userUpdateSchema = z
  .object({
    id: z.number().positive(),
    address: addressUpdateSchema,
    name: z.string().max(50),
    email: z.string().max(50).email(),
    password: z.string().max(120),
    cpf: z.string().max(11),
    phone: z.string().max(15),
    dateBirth: z.string(),
    description: z.string().max(150).nullish().optional(),
    isAdvertiser: z.boolean().default(false),
  })
  .omit({ id: true, isAdvertiser: true, password: true })
  .partial();

export {
  userSchema,
  addressSchema,
  addressCreateSchema,
  addressUpdateSchema,
  userCreateSchema,
  userUpdateSchema,
};
