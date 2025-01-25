import { Router } from "express";
import { TaskController } from "../controllers";
import { param } from "express-validator";
import { checkParams, validateRequest } from "../../common/middlewares";
import { CreateTaskDto } from "../dtos/createTaskDto";
import { UpdateTaskDto } from "../dtos";
const router = Router();

const paramMiddleware = checkParams([
    param("id")
        .isInt({ gt: 0 })
        .withMessage("Parameter must be a positive number."),
]);

router.get("/", TaskController.findAll);
router.post("/", validateRequest(CreateTaskDto), TaskController.create);

router.get("/:id", paramMiddleware, TaskController.findById);

router.put(
    "/:id",
    validateRequest(UpdateTaskDto),
    paramMiddleware,
    TaskController.update
);
router.delete("/:id", paramMiddleware, TaskController.delete);
router.patch("/:id/status", paramMiddleware, TaskController.updateStatus);

export default router;
