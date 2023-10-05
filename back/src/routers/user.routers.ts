import { Router } from "express";
import { userControllers } from "../controllers";
import middlewares from "../middlewares";
import { userCreateSchema, userUpdateSchema } from "../schemas";

const userRouter: Router = Router();

userRouter.post(
  "",
  middlewares.checkValidBody(userCreateSchema),
  middlewares.checkUniqueEmail,
  middlewares.checkAddressUnique,
  userControllers.create
);

userRouter.patch(
  "/:id",
  middlewares.checkIdExist,
  middlewares.checkValidBody(userUpdateSchema),
  middlewares.checkToken,
  middlewares.checkTokenUser,
  middlewares.checkUniqueEmail,
  userControllers.update
);
userRouter.delete(
  "/:id",
  middlewares.checkIdExist,
  middlewares.checkToken,
  middlewares.checkTokenUser,
  userControllers.destroy
);

export default userRouter;
