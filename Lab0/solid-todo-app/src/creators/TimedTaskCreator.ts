import { ICreateTask } from "../interfaces/ICreateTask";
import { Task } from "../models/Task";
import { TimedTask } from "../models/TimedTask";

export class TimedTaskCreator implements ICreateTask {
  createTask(description: string, dueDate: Date): Task {
    return new TimedTask(description, dueDate);
  }
}
