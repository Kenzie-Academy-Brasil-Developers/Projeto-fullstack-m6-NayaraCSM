import "express-async-errors";
import "reflect-metadata";
import express from "express";
import {
  userRouter,
  loginRouter,
  anouncementRouter,
  commentRouter,
} from "./routers";
import middlewares from "./middlewares";

const app = express();
app.use(express.json());

app.use("/user", userRouter);
app.use("/login", loginRouter);
app.use("/anouncement", anouncementRouter);
app.use("/comment", commentRouter);

app.use(middlewares.handleErrors);

export default app;
