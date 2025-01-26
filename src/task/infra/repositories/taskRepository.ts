import prisma from "../database";
import { Task } from "../../core/domains/task";
import { TaskRepository as AbstractTaskRepository } from "../../core/services/taskRepository";
import { NotFoundError } from "../../core/errors";

export class TaskRepository implements AbstractTaskRepository {
    async create(task: Task): Promise<Task> {
        const createdTask = await prisma.task.create({
            data: {
                title: task.title!,
                color: task.color!,
                completed: task.completed,
            },
        });

        return new Task(
            createdTask.id,
            createdTask.title,
            createdTask.color,
            createdTask.completed,
            createdTask.createdAt,
            createdTask.updatedAt
        );
    }

    async update(id: number, task: Partial<Task>): Promise<Task | null> {
        const oldTask = await prisma.task.findFirst({
            where: { id },
        });

        if (!oldTask) {
            throw new NotFoundError("Not Found");
        }

        const updatedTask = await prisma.task.update({
            where: { id },
            data: task,
        });

        if (!updatedTask) return null;

        return new Task(
            updatedTask.id,
            updatedTask.title,
            updatedTask.color,
            updatedTask.completed,
            updatedTask.createdAt,
            updatedTask.updatedAt
        );
    }

    async delete(id: number): Promise<boolean> {
        try {
            await prisma.task.delete({ where: { id } });
            return true;
        } catch (error) {
            return false;
        }
    }

    async findById(id: number): Promise<Task | null> {
        const foundTask = await prisma.task.findUnique({ where: { id } });

        if (!foundTask) {
            throw new NotFoundError("Not Found");
        }

        return new Task(
            foundTask.id,
            foundTask.title,
            foundTask.color,
            foundTask.completed,
            foundTask.createdAt,
            foundTask.updatedAt
        );
    }

    async findAll(): Promise<Task[]> {
        const tasks = await prisma.task.findMany({
            orderBy: {
                completed: "asc",
            },
        });

        return tasks.map(
            (task: Task) =>
                new Task(
                    task.id,
                    task.title,
                    task.color,
                    task.completed,
                    task.createdAt,
                    task.updatedAt
                )
        );
    }
}
