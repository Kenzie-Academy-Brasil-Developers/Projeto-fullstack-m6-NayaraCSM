import { Router } from "express";
import { userControllers } from "../controllers";

const userRouter: Router = Router();

userRouter.post("", userControllers.create);

userRouter.patch("/:id", userControllers.update);
userRouter.delete("/:id", userControllers.destroy);

export default userRouter;
