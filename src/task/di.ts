import { TaskRepository } from "./infra/repositories/taskRepository";
import { TaskUseCase } from "./core/usecases/taskUseCase";
import { TaskController } from "./presentation/controllers/taskController";

const todoRepository = new TaskRepository();
const todoUseCase = new TaskUseCase(todoRepository);
const taskController = new TaskController(todoUseCase);

export { taskController };
