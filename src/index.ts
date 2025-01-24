import express, { Express } from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import "express-async-errors";
import todoRoutes from "./routes";

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/todos", todoRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
