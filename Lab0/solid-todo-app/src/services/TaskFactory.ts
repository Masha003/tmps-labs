import { ICreateTask } from "../interfaces/ICreateTask";
import { Task } from "../models/Task";
import { TimedTask } from "../models/TimedTask";

export class TaskFactory {
  private taskCreator: ICreateTask;

  constructor(taskCreator: ICreateTask) {
    this.taskCreator = taskCreator;
  }

  taskFactory(description: string, dueDate?: Date) {
    return this.taskCreator.createTask(description, dueDate);
  }
}
