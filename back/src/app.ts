import "express-async-errors";
import "reflect-metadata";
import express from "express";
import middlewares from "./middlewares";

const app = express();
app.use(express.json());

app.use(middlewares.handleErrors);

export default app;
