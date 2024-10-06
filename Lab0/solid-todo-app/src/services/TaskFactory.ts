import { Task } from "../models/Task";
import { TimedTask } from "../models/TimedTask";

export class TaskFactory {
  static createTask(description: string, dueDate?: Date) {
    if (dueDate) {
      return new TimedTask(description, dueDate);
    }

    return new Task(description);
  }
}
