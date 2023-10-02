import { Router } from "express";

const userRouter: Router = Router();

userRouter.post("");
userRouter.patch("/:id");
userRouter.delete("/:id");

export default userRouter;
