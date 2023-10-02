import { z } from "zod";
import { userCreateSchema, userReturnSchema, addressSchema } from "../schemas";
import { DeepPartial } from "typeorm";
import { User } from "../entities";

type TUserCreate = z.infer<typeof userCreateSchema>;
type TUserReturn = z.infer<typeof userReturnSchema>;
type TUserUpdate = DeepPartial<User>;
type TAddress = z.infer<typeof addressSchema>;

export { TUserCreate, TUserReturn, TUserUpdate, TAddress };
