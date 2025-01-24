import { Request, Response } from "express";
import prisma from "../database";

export const TodoController = {
    findAll: async (req: Request, res: Response): Promise<any> => {
        const todos = await prisma.todo.findMany();

        return res.json(todos);
    },
};
