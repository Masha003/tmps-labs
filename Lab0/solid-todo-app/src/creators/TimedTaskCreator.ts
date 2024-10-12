import { ICreateTask } from "../interfaces/ICreateTask";
import { Task } from "../models/Task";
import { TimedTask } from "../models/TimedTask";
import { TaskCreator } from "./TaskCreator";

export class TimedTaskCreator extends TaskCreator {
  public taskFactory(description: string, dueDate: Date): Task {
    return new TimedTask(description, dueDate);
  }
}
