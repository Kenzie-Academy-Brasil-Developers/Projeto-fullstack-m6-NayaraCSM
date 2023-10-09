import { z } from "zod";
import {
  anouncementCreateSchema,
  anouncementReadSchema,
  anouncementReturnSchema,
  imageSchema,
} from "../schemas";
import { DeepPartial } from "typeorm";
import { Anouncement } from "../entities";

type TAnouncementCreate = z.infer<typeof anouncementCreateSchema>;
type TAnouncementRead = z.infer<typeof anouncementReadSchema>;
type TAnouncementReturn = z.infer<typeof anouncementReturnSchema>
type TAnouncementUpdate = DeepPartial<Anouncement>;
type TImage = z.infer<typeof imageSchema>;

export { TAnouncementCreate, TAnouncementRead, TAnouncementReturn, TAnouncementUpdate, TImage };
