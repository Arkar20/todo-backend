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
        return {
            messages: this.errors.map((err) => err.msg),
        };
    }
}
export { ExpressValidationError };
