import { Request, Response, NextFunction } from "express";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { ClassValidatorHandler } from "./ClassValidatorHandler";

export const validateRequest = <T>(type: new () => T) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        const object = plainToInstance(type, req.body);

        const errors = await validate(object as object);

        if (errors.length > 0) {
            throw new ClassValidatorHandler(errors);
        }

        req.body = object;

        next();
    };
};
