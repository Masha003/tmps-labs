import { TaskCreationParams } from "../interfaces/TaskCreationParams";
import { Task } from "../models/Task";
import { TaskCreator } from "./TaskCreator";

export class BasicTaskCreator extends TaskCreator {
  public taskFactory(params: TaskCreationParams): Task {
    return new Task(params.description);
  }
}
