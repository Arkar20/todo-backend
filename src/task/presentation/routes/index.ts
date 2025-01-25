import { Router } from "express";
import { param } from "express-validator";
import { checkParams, validateRequest } from "../middlewares";
import { CreateTaskDto } from "../dtos/createTaskDto";
import { UpdateTaskDto } from "../dtos";
import { taskController } from "../../di";

const router = Router();

// middlewares
const paramMiddleware = checkParams([
    param("id")
        .isInt({ gt: 0 })
        .withMessage("Parameter must be a positive number."),
]);

router.get("/", taskController.findAll.bind(taskController));

router.post(
    "/",
    validateRequest(CreateTaskDto),
    taskController.create.bind(taskController)
);

router.get(
    "/:id",
    paramMiddleware,
    taskController.findById.bind(taskController)
);

router.put(
    "/:id",
    validateRequest(UpdateTaskDto),
    paramMiddleware,
    taskController.update.bind(taskController)
);
router.delete(
    "/:id",
    paramMiddleware,
    taskController.delete.bind(taskController)
);

router.patch(
    "/:id/status",
    paramMiddleware,
    taskController.update.bind(taskController)
);

export { router };
