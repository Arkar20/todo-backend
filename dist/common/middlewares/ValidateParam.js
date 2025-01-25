"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkParams = exports.ValidateParamRequest = void 0;
const express_validator_1 = require("express-validator");
const ExpressValidatorHandler_1 = require("./ExpressValidatorHandler");
const ValidateParamRequest = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        throw new ExpressValidatorHandler_1.ExpressValidationError(errors.array());
    }
    next();
};
exports.ValidateParamRequest = ValidateParamRequest;
const checkParams = (middlewares) => [
    ...middlewares,
    exports.ValidateParamRequest,
];
exports.checkParams = checkParams;
