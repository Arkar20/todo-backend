"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpressValidationError = void 0;
const AbstractErrorHandler_1 = __importDefault(require("./AbstractErrorHandler"));
class ExpressValidationError extends AbstractErrorHandler_1.default {
    constructor(errors) {
        super();
        this.errors = errors;
        this.type = "Express Validator";
        this.statusCode = 400;
        Object.setPrototypeOf(this, ExpressValidationError.prototype);
    }
    serialize() {
        return {
            messages: this.errors.map((err) => err.msg),
        };
    }
}
exports.ExpressValidationError = ExpressValidationError;
