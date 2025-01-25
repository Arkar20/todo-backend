import { Request, Response } from "express";
import prisma from "../../database";
import { NotFoundError } from "../../common/middlewares";
import { CreateTaskDto } from "../dtos/createTaskDto";
import { UpdateTaskDto } from "../dtos";

export const TaskController = {
    findAll: async (req: Request, res: Response) => {
        const tasks = await prisma.task.findMany();

        res.json(tasks);
    },

    findById: async (req: Request, res: Response) => {
        const { id } = req.params;

        const taskId = parseInt(id);

        const task = await prisma.task.findUnique({
            where: { id: taskId },
        });

        if (!task) {
            throw new NotFoundError("Record Not Found");
        }

        res.json(task);
    },

    create: async (req: Request, res: Response) => {
        const dto: CreateTaskDto = req.body;

        const task = await prisma.task.create({
            data: {
                title: dto.title,
                completed: dto.completed,
                color: dto.color,
            },
        });

        res.json(task);
    },

    update: async (req: Request, res: Response) => {
        const { id } = req.params;

        const taskId = parseInt(id);

        const dto: UpdateTaskDto = req.body;

        const oldTask = await prisma.task.findFirst({
            where: { id: taskId },
        });

        if (!oldTask) {
            throw new NotFoundError("Record Not Found");
        }

        const task = await prisma.task.update({
            where: { id: taskId },
            data: {
                title: dto.title,
                completed: dto.completed,
                color: dto.color,
            },
        });

        res.json(task);
    },
    updateStatus: async (req: Request, res: Response) => {
        const { id } = req.params;

        const taskId = parseInt(id);

        const oldTask = await prisma.task.findFirst({
            where: { id: taskId },
        });

        if (!oldTask) {
            throw new NotFoundError("Record Not Found");
        }

        const task = await prisma.task.update({
            where: { id: taskId },
            data: {
                completed: !oldTask.completed,
            },
        });

        res.json(task);
    },

    delete: async (req: Request, res: Response) => {
        const { id } = req.params;

        const taskId = parseInt(id);

        const task = await prisma.task.delete({
            where: { id: taskId },
        });

        res.json(task);
    },
};
