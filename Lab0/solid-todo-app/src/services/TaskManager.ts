import { Task } from "../models/Task";

export class TaskManager {
  private tasks: Task[] = [];

  constructor() {
    this.tasks = [];
  }

  addTask(task: Task): void {
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
