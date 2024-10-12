import { TaskCreationParams } from "../interfaces/TaskCreationParams";
import { Task } from "../models/Task";

export abstract class TaskCreator {
  public abstract taskFactory(params: TaskCreationParams): Task;

  public createTask(params: TaskCreationParams) {
    return this.taskFactory(params);
  }
}
