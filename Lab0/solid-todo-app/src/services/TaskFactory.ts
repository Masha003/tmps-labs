import { ICreateTask } from "../interfaces/ICreateTask";
import { Task } from "../models/Task";

export class TaskFactory {
  private taskCreator: ICreateTask;

  constructor(taskCreator: ICreateTask) {
    this.taskCreator = taskCreator;
  }

  createTask(description: string, dueDate?: Date): Task {
    return this.taskCreator.createTask(description, dueDate);
  }
}
