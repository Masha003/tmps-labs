import { Task } from "../models/Task";
import { TaskCreator } from "./TaskCreator";

export class BasicTaskCreator extends TaskCreator {
  public taskFactory(description: string): Task {
    return new Task(description);
  }
}
