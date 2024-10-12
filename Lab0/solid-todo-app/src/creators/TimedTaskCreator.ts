import { TaskCreationParams } from "../interfaces/TaskCreationParams";
import { TimedTask } from "../models/TimedTask";
import { TaskCreator } from "./TaskCreator";

export class TimedTaskCreator extends TaskCreator {
  public taskFactory(params: TaskCreationParams): TimedTask {
    if (!params.dueDate) {
      throw new Error("TimedTask requires a due date.");
    }
    return new TimedTask(params.description, params.dueDate);
  }
}
