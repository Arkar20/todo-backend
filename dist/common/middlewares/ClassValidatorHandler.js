"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassValidatorHandler = void 0;
const AbstractErrorHandler_1 = __importDefault(require("./AbstractErrorHandler"));
class ClassValidatorHandler extends AbstractErrorHandler_1.default {
    constructor(errors) {
        super();
        this.errors = errors;
        this.type = "Class Validator";
        this.statusCode = 400;
        Object.setPrototypeOf(this, ClassValidatorHandler.prototype);
    }
    serialize() {
        const errorMessages = this.errors.flatMap((err) => Object.values(err.constraints || {}));
        return { messages: errorMessages };
    }
}
exports.ClassValidatorHandler = ClassValidatorHandler;
