import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import { ExpressValidationError } from "./ExpressValidatorHandler";

export const ValidateParamRequest = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        throw new ExpressValidationError(errors.array());
    }

    next();
};

export const checkParams = (middlewares: any) => [
    ...middlewares,
    ValidateParamRequest,
];
