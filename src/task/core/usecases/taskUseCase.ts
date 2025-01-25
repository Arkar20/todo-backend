import { Task } from "../domains/task";
import { TaskRepository } from "../services/taskRepository";

export class TaskUseCase {
    constructor(private todoRepository: TaskRepository) {}

    async create(todo: Task): Promise<Task> {
        return await this.todoRepository.create(todo);
    }

    async findAll(): Promise<Task[]> {
        return await this.todoRepository.findAll();
    }

    async findById(id: number): Promise<Task | null> {
        return await this.todoRepository.findById(id);
    }

    async update(id: number, todo: Partial<Task>): Promise<Task | null> {
        return await this.todoRepository.update(id, todo);
    }

    async delete(id: number): Promise<boolean> {
        return await this.todoRepository.delete(id);
    }
}
