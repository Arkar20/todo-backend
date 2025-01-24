import "express-async-errors";

import express, { Express } from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import todoRoutes from "./routes";
import { ErrorHandler } from "./common/middlewares";
dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// global middlewares

// routes
app.use("/todos", todoRoutes);

// error handlers
app.use(ErrorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
