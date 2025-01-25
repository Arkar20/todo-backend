"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundError = void 0;
const AbstractErrorHandler_1 = __importDefault(require("./AbstractErrorHandler"));
class NotFoundError extends AbstractErrorHandler_1.default {
    constructor(message) {
        super();
        this.message = message;
        this.type = "404 Not Found";
        this.statusCode = 404;
        Object.setPrototypeOf(this, NotFoundError.prototype);
    }
    serialize() {
        return { messages: [this.message] };
    }
}
exports.NotFoundError = NotFoundError;
