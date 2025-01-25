import { Request, Response } from "express";
import { TaskUseCase } from "../../core/usecases/taskUseCase";
import { Task } from "../../core/domains/task";
import { CreateTaskDto } from "../dtos/";
import { UpdateTaskDto } from "../dtos";
import { NotFoundError } from "../../core/errors";

export class TaskController {
    constructor(private taskUseCase: TaskUseCase) {}

    async create(req: Request, res: Response) {
        const createTodoDto = req.body as CreateTaskDto;

        const todo = new Task(
            Date.now(),
            createTodoDto.title,
            createTodoDto.color,
            createTodoDto.completed
        );

        const createdTodo = await this.taskUseCase.create(todo);

        res.status(201).json(createdTodo);
    }

    async findAll(req: Request, res: Response) {
        const tasks = await this.taskUseCase.findAll();

        res.status(200).json(tasks);
    }

    async findById(req: Request, res: Response) {
        const { id } = req.params;

        const todo = await this.taskUseCase.findById(Number(id));

        res.status(200).json(todo);
    }

    async update(req: Request, res: Response) {
        const { id } = req.params;

        const updateTodoDto = req.body as UpdateTaskDto;

        const todo = new Task(
            Number(id),
            updateTodoDto.title,
            updateTodoDto.color,
            updateTodoDto.completed
        );

        const updatedTodo = await this.taskUseCase.update(Number(id), todo);

        res.status(200).json(updatedTodo);
    }

    async delete(req: Request, res: Response) {
        const { id } = req.params;

        await this.taskUseCase.delete(Number(id));

        res.status(204).send();
    }
}
