import { z } from "zod";
import {
  anouncementCreateSchema,
  anouncementReadSchema,
  imageSchema,
} from "../schemas";
import { DeepPartial } from "typeorm";
import { Anouncement } from "../entities";

type TAnouncementCreate = z.infer<typeof anouncementCreateSchema>;
type TAnouncementRead = z.infer<typeof anouncementReadSchema>;
type TAnouncementUpdate = DeepPartial<Anouncement>;
type TImage = z.infer<typeof imageSchema>;

export { TAnouncementCreate, TAnouncementRead, TAnouncementUpdate, TImage };
