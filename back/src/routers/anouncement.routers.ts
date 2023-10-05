import { Router } from "express";
import middlewares from "../middlewares";
import { anouncementCreateSchema } from "../schemas";

const anouncementRouter: Router = Router();

anouncementRouter.post(
  "",
  middlewares.checkValidBody(anouncementCreateSchema),
  middlewares.checkToken,
  middlewares.checkTokenUser
);
anouncementRouter.get("");
anouncementRouter.get("/:userId");

anouncementRouter.get("/:id");
anouncementRouter.patch("/:id");
anouncementRouter.delete("/:id");

export default anouncementRouter;
