import { Task } from "../models/Task";

export abstract class TaskCreator {
  public abstract taskFactory(
    description: string,
    dueDate?: Date,
    isComplete?: boolean
  ): Task;

  public createTask(description: string, dueDate?: Date, isComplete?: boolean) {
    return this.taskFactory(description, dueDate, isComplete);
  }
}
