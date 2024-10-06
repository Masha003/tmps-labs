import { Task } from "./Task";

export class TimedTask extends Task {
  constructor(
    description: string,
    public dueDate: Date,
    isCompleted: boolean = false
  ) {
    super(description, isCompleted);
  }

  isOverdue(): boolean {
    const now = new Date();
    return now > this.dueDate;
  }
}
