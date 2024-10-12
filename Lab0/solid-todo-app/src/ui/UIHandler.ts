import { BasicTaskCreator } from "../creators/BasicTaskCreator";
import { TimedTaskCreator } from "../creators/TimedTaskCreator";
import { TimedTask } from "../models/TimedTask";
import { TaskManager } from "../services/TaskManager";
import { rl } from "./MenuHandler";

export class UIHandler {
  constructor(private taskManager: TaskManager) {}

  displayTasks(): void {
    const tasks = this.taskManager.listTasks();

    console.log("To-do list: ");
    tasks.forEach((task, index) => {
      const status = task.getCompleted() ? "[x]" : "[ ]";
      const deadline =
        task instanceof TimedTask
          ? `Due: ${task.getDueDate().toDateString()}.`
          : "";
      const timeRemaining =
        task instanceof TimedTask
          ? `Time remaining: ${task.timeRemaining()}.`
          : "";
      console.log(
        `${
          index + 1
        }. ${status} ${task.getDescription()}. ${deadline} ${timeRemaining}`
      );
    });
  }

  createTask(callback: () => void): void {
    rl.question("Enter task description: ", (description: string) => {
      if (description) {
        rl.question("Is this a timed task? (yes/no) ", (res: string) => {
          if (res.toLowerCase() === "yes") {
            rl.question(
              "Add due date (YYYY-MM-DD HH:MM): ",
              (dateString: string) => {
                const dueDate = new Date(dateString);
                if (!isNaN(dueDate.getTime())) {
                  const timedTaskCreator = new TimedTaskCreator();
                  this.taskManager.addTask(
                    timedTaskCreator,
                    description,
                    dueDate
                  );
                  console.log("Task added!");
                } else {
                  console.log("Invalid date format.");
                }
                callback();
              }
            );
          } else {
            const basicTaskCreator = new BasicTaskCreator();
            this.taskManager.addTask(basicTaskCreator, description);
            console.log("Task added!");
            this.displayTasks();
            callback();
          }
        });
      } else {
        console.log("No task description entered.");
        callback();
      }
    });
  }

  handleTaskRemove(callback: () => void): void {
    rl.question("Enter task index to delete: ", (strIndex: string) => {
      const tasks = this.taskManager.listTasks();
      const index = parseInt(strIndex) - 1;
      if (tasks.includes(tasks[index])) {
        this.taskManager.removeTask(index);
        console.log("Task removed!");
        this.displayTasks();
      } else {
        console.log("No task index entered.");
      }
      callback();
    });
  }

  handleTaskComplete(callback: () => void): void {
    rl.question("Enter task index to update: ", (strIndex: string) => {
      const tasks = this.taskManager.listTasks();
      const index = parseInt(strIndex) - 1;
      if (tasks.includes(tasks[index])) {
        this.taskManager.completeTask(index);
        console.log("Task completed!");
        this.displayTasks();
      } else {
        console.log("No task index entered.");
      }
      callback();
    });
  }
}
