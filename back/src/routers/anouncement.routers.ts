import { Router } from "express";

const anouncementRouter: Router = Router();

anouncementRouter.post("");
anouncementRouter.get("");
anouncementRouter.get("/:userId");

anouncementRouter.get("/:id");
anouncementRouter.patch("/:id");
anouncementRouter.delete("/:id");

export default anouncementRouter;
