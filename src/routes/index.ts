import { Router } from "express";
import { TodoController } from "../controllers";

const router = Router();

router.get("/", TodoController.findAll);
router.post("/", TodoController.create);
router.get("/:id", TodoController.findById);
router.put("/:id", TodoController.update);
router.delete("/:id", TodoController.delete);
router.patch("/:id/status", TodoController.updateStatus);

export default router;
