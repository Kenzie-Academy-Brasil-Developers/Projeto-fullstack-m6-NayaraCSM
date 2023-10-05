import { z } from "zod";
import {
  userCreateSchema,
  addressSchema,
  addressCreateSchema,
} from "../schemas";
import { DeepPartial } from "typeorm";
import { Address, User } from "../entities";

type TUserCreate = z.infer<typeof userCreateSchema>;
type TUserUpdate = DeepPartial<User>;
type TAddress = z.infer<typeof addressSchema>;
type TAddressCreate = z.infer<typeof addressCreateSchema>;
type TAddressUpdate = DeepPartial<Address>;

export { TUserCreate, TUserUpdate, TAddress, TAddressCreate, TAddressUpdate };
