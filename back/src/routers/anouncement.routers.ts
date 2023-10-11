import { Router } from "express";
import middlewares from "../middlewares";
import { anouncementCreateSchema, anouncementUpdateSchema } from "../schemas";
import { anouncementControllers } from "../controllers";

const anouncementRouter: Router = Router();

anouncementRouter.post(
  "",
  middlewares.checkValidBody(anouncementCreateSchema),
  middlewares.checkToken,
  middlewares.checkIsAdvertiser,
  anouncementControllers.create
);
anouncementRouter.get("", anouncementControllers.readAll);

anouncementRouter.get("/:id", anouncementControllers.readByAnouncementId);
anouncementRouter.get(
  "/user/:id",
  middlewares.checkIdExist,
  anouncementControllers.readByUserId
);

anouncementRouter.patch(
  "/:id",
  middlewares.checkValidBody(anouncementUpdateSchema),
  middlewares.checkToken,
  middlewares.checkTokenUser,
  anouncementControllers.update
);
anouncementRouter.delete(
  "/:id",
  middlewares.checkToken,
  middlewares.checkToken,
  middlewares.checkTokenUser,
  anouncementControllers.destroy
);

export default anouncementRouter;
