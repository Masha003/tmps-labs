import { Task } from "./Task";

export class TimedTask extends Task {
  private dueDate: Date;

  constructor(
    description: string,
    dueDate: Date,
    isCompleted: boolean = false
  ) {
    super(description, isCompleted);
    this.dueDate = dueDate;
  }

  getDueDate(): Date {
    return this.dueDate;
  }

  setDueDate(date: Date) {
    this.dueDate = date;
  }

  timeRemaining(): string {
    const now = new Date();
    const due = this.getDueDate();
    const timeDifference = due.getTime() - now.getTime();

    if (timeDifference <= 0) {
      return "OVERDUE!";
    }

    const minutes = Math.floor(timeDifference / (1000 * 60)); // Total minutes remaining
    const hours = Math.floor(minutes / 60); // Total hours remaining
    const days = Math.floor(hours / 24); // Total days remaining

    if (days > 0) {
      return `${days} day(s)`;
    } else if (hours > 0) {
      return `${hours} hour(s)`;
    } else {
      return `${minutes} minute(s)`;
    }
  }
}
