"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHandler = void 0;
const AbstractErrorHandler_1 = __importDefault(require("./AbstractErrorHandler"));
const ErrorHandler = (err, req, res, next) => {
    if (err instanceof AbstractErrorHandler_1.default) {
        res.status(err.statusCode).json(err.serialize());
    }
    else {
        console.log(err);
        res.status(500).send("Something went wrong");
    }
};
exports.ErrorHandler = ErrorHandler;
