import ErrorHandler from "./AbstractErrorHandler";
import { ValidationError } from "express-validator";

class ExpressValidationError extends ErrorHandler {
    type = "Express Validator";
    statusCode = 400;
    constructor(public errors: ValidationError[]) {
        super();
        Object.setPrototypeOf(this, ExpressValidationError.prototype);
    }

    serialize() {
        return this.errors.map((err) => {
            return { message: err.msg };
        });
    }
}
export { ExpressValidationError };
