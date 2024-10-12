import { Task } from "../models/Task";
import { TaskFactory } from "./TaskFactory";

export class TaskManager {
  private tasks: Task[] = [];

  constructor(tasks: []) {
    this.tasks = tasks;
  }

  addTask(description: string, dueDate?: Date): void {
    const task = TaskFactory.createTask(description, dueDate);
    this.tasks.push(task);
  }

  removeTask(index: number): void {
    this.tasks.splice(index, 1);
  }

  completeTask(index: number): void {
    if (this.tasks[index]) {
      this.tasks[index].setCompletion(true);
    }
  }

  listTasks(): Task[] {
    return this.tasks;
  }
}
