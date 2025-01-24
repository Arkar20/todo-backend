import { Router } from "express";
import { TodoController } from "../controllers";

const router = Router();

router.get("/", TodoController.findAll);
router.post("/", TodoController.create);
router.get("/:id", TodoController.findById);

export default router;
