import { Request, Response } from "express";
import prisma from "../database";
import { NotFoundError } from "../common/middlewares";

export const TodoController = {
    findAll: async (req: Request, res: Response) => {
        const todos = await prisma.todo.findMany();

        res.json(todos);
    },

    findById: async (req: Request, res: Response) => {
        const { id } = req.params;

        const todoId = parseInt(id);

        const todo = await prisma.todo.findUnique({
            where: { id: todoId },
        });

        if (!todo) {
            throw new NotFoundError("Record Not Found");
        }

        res.json(todo);
    },

    create: async (req: Request, res: Response) => {
        const data = req.body;

        const todo = await prisma.todo.create({ data });

        res.json(todo);
    },

    update: async (req: Request, res: Response) => {
        const { id } = req.params;

        const todoId = parseInt(id);

        const data = req.body;

        const oldTodo = await prisma.todo.findFirstOrThrow({
            where: { id: todoId },
        });

        if (!oldTodo) {
            throw new NotFoundError("Record Not Found");
        }

        const todo = await prisma.todo.update({
            where: { id: todoId },
            data,
        });

        res.json(todo);
    },
    updateStatus: async (req: Request, res: Response) => {
        const { id } = req.params;

        const todoId = parseInt(id);

        const oldTodo = await prisma.todo.findFirstOrThrow({
            where: { id: todoId },
        });

        if (!oldTodo) {
            throw new NotFoundError("Record Not Found");
        }

        const todo = await prisma.todo.update({
            where: { id: todoId },
            data: {
                completed: !oldTodo.completed,
            },
        });

        res.json(todo);
    },

    delete: async (req: Request, res: Response) => {
        const { id } = req.params;

        const todoId = parseInt(id);

        const todo = await prisma.todo.delete({
            where: { id: todoId },
        });

        res.json(todo);
    },
};
