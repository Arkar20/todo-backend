"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const express_validator_1 = require("express-validator");
const middlewares_1 = require("../../common/middlewares");
const createDto_1 = require("../dtos/createDto");
const router = (0, express_1.Router)();
const paramMiddleware = (0, middlewares_1.checkParams)([
    (0, express_validator_1.param)("id")
        .isInt({ gt: 0 })
        .withMessage("Parameter must be a positive number."),
]);
router.get("/", controllers_1.TaskController.findAll);
router.post("/", (0, middlewares_1.validateRequest)(createDto_1.CreateTodoDto), controllers_1.TaskController.create);
router.get("/:id", paramMiddleware, controllers_1.TaskController.findById);
router.put("/:id", paramMiddleware, controllers_1.TaskController.update);
router.delete("/:id", paramMiddleware, controllers_1.TaskController.delete);
router.patch("/:id/status", paramMiddleware, controllers_1.TaskController.updateStatus);
exports.default = router;
