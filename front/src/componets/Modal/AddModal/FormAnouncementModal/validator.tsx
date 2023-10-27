import { z } from "zod";

const imageSchema = z.object({
  image: z.string().min(10, "A URL da imagem é obrigatória."),
});

export const anouncementSchema = z.object({
  brand: z.string().min(1, "É obrigatório informar uma marca."),
  model: z.string().min(2, "O modelo é obrigatório."),
  year: z.string().min(4, "O ano é obrigatório."),
  fuel: z.string().min(3, "É obrigatório informar o tipo de combustível."),
  mileage: z.string().min(1, "É obrigatório informar a quilometragem."),
  color: z.string().min(3, "É obrigatório informar a cor."),
  fipePrice: z.string().min(3, "É obrigatório informar um valor."),
  price: z.string().min(2, "É obrigatório informar um preço"),
  description: z.string(),
  images: z.array(imageSchema).min(1, "Pelo menos uma imagem é obrigatória."),
});

export type TAnouncementData = z.infer<typeof anouncementSchema>;
