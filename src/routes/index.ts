import { Router } from "express";
import { TodoController } from "../controllers";

const router = Router();

router.get("/", TodoController.findAll);

export default router;
