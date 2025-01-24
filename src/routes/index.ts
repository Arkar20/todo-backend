import { Router } from "express";
import { TodoController } from "../controllers";
import { param } from "express-validator";
import { checkParams } from "../common/middlewares";
const router = Router();

const paramMiddleware = checkParams([
    param("id")
        .isInt({ gt: 0 })
        .withMessage("Parameter must be a positive number."),
]);

router.get("/", TodoController.findAll);
router.post("/", TodoController.create);

router.get("/:id", paramMiddleware, TodoController.findById);
router.put("/:id", paramMiddleware, TodoController.update);
router.delete("/:id", paramMiddleware, TodoController.delete);
router.patch("/:id/status", paramMiddleware, TodoController.updateStatus);

export default router;
