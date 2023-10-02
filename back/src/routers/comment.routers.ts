import { Router } from "express";

const commentRouter: Router = Router();

commentRouter.post("");
commentRouter.get("/:anouncementId");

commentRouter.use("/:id");

commentRouter.patch("/:id");
commentRouter.delete("/:id");

export default commentRouter;
