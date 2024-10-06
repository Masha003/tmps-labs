import { Task } from "../models/Task";
import * as fs from "fs";

export class TaskPersistence {
  private filePath: string;

  constructor(filePath: string = "./tasks.json") {
    this.filePath = filePath;
  }

  // Save tasks to a file
  saveTasks(tasks: Task[]): void {
    const jsonData = JSON.stringify(tasks, null, 2); // Pretty-print JSON
    fs.writeFileSync(this.filePath, jsonData, "utf8");
    console.log("Tasks have been saved!");
  }

  // Load tasks from a file
  loadTasks(): Task[] {
    try {
      const data = fs.readFileSync(this.filePath, "utf8");
      const tasks = JSON.parse(data);
      // Convert plain object to Task class instances
      return tasks.map(
        (taskData: any) => new Task(taskData.description, taskData.isCompleted)
      );
    } catch (err) {
      console.error("Could not load tasks, starting with an empty task list.");
      return [];
    }
  }
}
