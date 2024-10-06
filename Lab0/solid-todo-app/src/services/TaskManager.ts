import { Task } from "../models/Task";
import { TaskFactory } from "./TaskFactory";
import { TaskPersistence } from "../storage/TaskPersistence";

export class TaskManager {
  private tasks: Task[] = [];
  private taskPersistence: TaskPersistence;

  constructor(taskPersistence: TaskPersistence = new TaskPersistence()) {
    this.taskPersistence = taskPersistence;
    this.tasks = this.taskPersistence.loadTasks();
  }

  addTask(description: string, dueDate?: Date): void {
    const task = TaskFactory.createTask(description, dueDate);
    this.tasks.push(task);
    this.taskPersistence.saveTasks(this.tasks);
  }

  removeTask(index: number): void {
    this.tasks.splice(index, 1);
    this.taskPersistence.saveTasks(this.tasks);
  }

  completeTask(index: number): void {
    if (this.tasks[index]) {
      this.tasks[index].isCompleted = true;
      this.taskPersistence.saveTasks(this.tasks);
    }
  }

  listTasks(): Task[] {
    return this.tasks;
  }
}
