import "express-async-errors";

import express, { Express } from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import todoRoutes from "./task/routes";
import { ErrorHandler } from "./common/middlewares";
import "reflect-metadata";

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// global middlewares

// routes
app.use("/tasks", todoRoutes);

// error handlers
app.use(ErrorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
