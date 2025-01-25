import { Task } from "../domains/task";

export interface TaskRepository {
    create(todo: Task): Promise<Task>;
    findAll(): Promise<Task[]>;
    findById(id: number): Promise<Task | null>;
    update(id: number, todo: Partial<Task>): Promise<Task | null>;
    delete(id: number): Promise<boolean>;
}
