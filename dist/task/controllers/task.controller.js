"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskController = void 0;
const database_1 = __importDefault(require("../../database"));
const middlewares_1 = require("../../common/middlewares");
exports.TaskController = {
    findAll: async (req, res) => {
        const tasks = await database_1.default.task.findMany();
        res.json(tasks);
    },
    findById: async (req, res) => {
        const { id } = req.params;
        const taskId = parseInt(id);
        const task = await database_1.default.task.findUnique({
            where: { id: taskId },
        });
        if (!task) {
            throw new middlewares_1.NotFoundError("Record Not Found");
        }
        res.json(task);
    },
    create: async (req, res) => {
        const dto = req.body;
        const task = await database_1.default.task.create({
            data: {
                title: dto.title,
                completed: dto.completed,
                color: dto.color,
            },
        });
        res.json(task);
    },
    update: async (req, res) => {
        const { id } = req.params;
        const taskId = parseInt(id);
        const data = req.body;
        const oldTask = await database_1.default.task.findFirst({
            where: { id: taskId },
        });
        if (!oldTask) {
            throw new middlewares_1.NotFoundError("Record Not Found");
        }
        const task = await database_1.default.task.update({
            where: { id: taskId },
            data,
        });
        res.json(task);
    },
    updateStatus: async (req, res) => {
        const { id } = req.params;
        const taskId = parseInt(id);
        const oldTask = await database_1.default.task.findFirst({
            where: { id: taskId },
        });
        if (!oldTask) {
            throw new middlewares_1.NotFoundError("Record Not Found");
        }
        const task = await database_1.default.task.update({
            where: { id: taskId },
            data: {
                completed: !oldTask.completed,
            },
        });
        res.json(task);
    },
    delete: async (req, res) => {
        const { id } = req.params;
        const taskId = parseInt(id);
        const task = await database_1.default.task.delete({
            where: { id: taskId },
        });
        res.json(task);
    },
};
