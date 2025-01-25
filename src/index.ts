import "express-async-errors";

import express, { Express } from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { router as taskRoutes } from "./task/";
import { ErrorHandler } from "./task/presentation/middlewares";

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes
app.use("/tasks", taskRoutes);

// error handlers
app.use(ErrorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
