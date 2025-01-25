import ErrorHandler from "./AbstractErrorHandler";
import { ValidationError } from "class-validator";

class ClassValidatorHandler extends ErrorHandler {
    type = "Class Validator";
    statusCode = 400;
    constructor(public errors: ValidationError[]) {
        super();
        Object.setPrototypeOf(this, ClassValidatorHandler.prototype);
    }

    serialize() {
        const errorMessages = this.errors.flatMap((err) =>
            Object.values(err.constraints || {})
        );

        return { messages: errorMessages };
    }
}
export { ClassValidatorHandler };
