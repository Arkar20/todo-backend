import { Request, Response } from "express";

export const TodoController = {
    findAll: async (req: Request, res: Response): Promise<any> => {
        return res.json([]);
    },
};
