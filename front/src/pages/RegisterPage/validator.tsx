import { z } from "zod";

export const registerSchema = z
  .object({
    name: z
      .string()
      .min(3, "O nome é obrigatório e precisa conter pelo menos 3 caracteres."),
    email: z
      .string()
      .min(1, "O e-mail é obrigatório.")
      .email("Digite um e-mail válido."),
    cpf: z.string().min(10, "O CPF é obrigatório."),
    phone: z.string().min(8, "O número do telefone é obrigatório."),
    dateBirth: z.string(),
    description: z.string(),
    cep: z.string().min(5, "É obrigatório cadastrar um cep"),
    state: z.string().min(2, "É obrigatório cadastrar um estado"),
    city: z.string().min(3, "É obrigatório cadastrar uma cidade"),
    street: z.string().min(1, "É obrigatório cadastrar uma rua"),
    number: z.string(),
    complement: z.string(),
    isAdvertiser: z.string(),
    password: z
      .string()
      .min(7, "A senha precisa conter pelo menos 7 caracteres.")
      .regex(
        /(?=.*?[#?!@$%^&*-])/,
        "É necessário pelo menos um caracter especial."
      )
      .regex(/(?=.*?[A-Z])/, "É necessário pelo menos uma letra maiúscula.")
      .regex(/(?=.*?[a-z])/, "É necessário pelo menos uma letra minúscula.")
      .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número."),
    confirm: z.string().min(1, "É obrigatório confirmar a senha."),
  })
  .refine(({ password, confirm }) => password === confirm, {
    message: "A confirmação de senha precisa corresponder com a senha.",
    path: ["confirm"],
  });

export type TRegisterData = z.infer<typeof registerSchema>;
