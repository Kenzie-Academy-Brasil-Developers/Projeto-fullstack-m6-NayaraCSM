import { z } from "zod";
import { loginSchema } from "../schemas";

type TLoginCreate = z.infer<typeof loginSchema>;
type TLoginReturn = { token: string };

export { TLoginCreate, TLoginReturn };
