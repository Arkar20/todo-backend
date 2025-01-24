import { Request, Response, NextFunction } from "express";
import AbstractErrorHandler from "./AbstractErrorHandler";

export const ErrorHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (err instanceof AbstractErrorHandler) {
        res.status(err.statusCode).json(err.serialize());
    } else {
        res.status(500).send("Something went wrong");
    }
};
