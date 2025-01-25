"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRequest = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const ClassValidatorHandler_1 = require("./ClassValidatorHandler");
const validateRequest = (DtoClass) => {
    return async (req, res, next) => {
        try {
            const object = (0, class_transformer_1.plainToInstance)(DtoClass, req.body, {
                enableImplicitConversion: true,
            });
            console.log(typeof object);
            const errors = await (0, class_validator_1.validate)(object, {
                whitelist: true,
                forbidNonWhitelisted: false,
            });
            if (errors.length > 0) {
                throw new ClassValidatorHandler_1.ClassValidatorHandler(errors);
            }
            req.body = object;
            next();
        }
        catch (error) {
            next(error);
        }
    };
};
exports.validateRequest = validateRequest;
