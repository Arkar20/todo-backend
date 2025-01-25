"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ErrorHandler extends Error {
    constructor() {
        super();
        Object.setPrototypeOf(this, ErrorHandler.prototype);
    }
}
exports.default = ErrorHandler;
