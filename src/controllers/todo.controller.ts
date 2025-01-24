import { Request, Response } from "express";
import prisma from "../database";
import { Todo } from "@prisma/client";

export const TodoController = {
    findAll: async (req: Request, res: Response) => {
        const todos = await prisma.todo.findMany();

        res.json(todos);
    },

    findById: async (req: Request, res: Response) => {
        const { id } = req.params;

        const todoId = parseInt(id);

        const todos = await prisma.todo.findUnique({
            where: { id: todoId },
        });

        res.json(todos);
    },

    create: async (req: Request, res: Response) => {
        const data = req.body;

        const todo = await prisma.todo.create(data);

        res.json(todo);
    },

    update: async (req: Request, res: Response) => {
        const { id } = req.params;

        const todoId = parseInt(id);

        const { data } = req.body;

        const todo = prisma.todo.update({
            where: { id: todoId },
            data,
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
