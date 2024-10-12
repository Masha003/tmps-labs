import { Task } from "../models/Task";

export interface ICreateTask {
  createTask(description: string, dueDate?: Date): Task;
}
