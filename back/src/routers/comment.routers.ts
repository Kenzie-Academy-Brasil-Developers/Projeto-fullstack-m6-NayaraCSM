import { Router } from "express";

const commentRouter: Router = Router();

commentRouter.post("");
commentRouter.get("/:anouncementId");

commentRouter.patch("/:id");
commentRouter.delete("/:id");

export default commentRouter;
