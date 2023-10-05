import { Router } from "express";
import middlewares from "../middlewares";
import { loginSchema } from "../schemas";
import { loginControllers } from "../controllers";

const loginRouter: Router = Router();

loginRouter.post(
  "",
  middlewares.checkValidBody(loginSchema),
  loginControllers.create
);

export default loginRouter;
