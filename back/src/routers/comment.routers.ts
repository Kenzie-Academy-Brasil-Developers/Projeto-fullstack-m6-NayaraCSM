import { Router } from "express";
import { commentControllers } from "../controllers";
import middlewares from "../middlewares";
import { commentCreateSchema, commentUpdateSchema } from "../schemas";

const commentRouter: Router = Router();

commentRouter.post(
  "/anouncement/:id",
  middlewares.checkValidBody(commentCreateSchema),
  middlewares.checkToken,
  commentControllers.create
);
commentRouter.get("/anouncement/:id", commentControllers.readByAnouncementId);

commentRouter.patch(
  "/:id",
  middlewares.checkValidBody(commentUpdateSchema),
  middlewares.checkToken,
  middlewares.checkTokenUser,
  commentControllers.update
);
commentRouter.delete(
  "/:id",
  middlewares.checkToken,
  middlewares.checkTokenUser,
  commentControllers.destroy
);

export default commentRouter;
