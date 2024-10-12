import { ICreateTask } from "../interfaces/ICreateTask";
import { Task } from "../models/Task";

export class BasicTaskCreator implements ICreateTask {
  createTask(description: string): Task {
    return new Task(description);
  }
}
