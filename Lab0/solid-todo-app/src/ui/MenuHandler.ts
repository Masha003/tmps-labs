import { TaskManager } from "../services/TaskManager";
import { UIHandler } from "./UIHandler";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export class MenuHandler {
  constructor(private uiHandler: UIHandler) {}

  displayMenu(): void {
    console.log(`
      1. Add task
      2. Remove task
      3. Mark task as complete
      4. Display tasks
      5. Exit
    `);

    rl.question("Choose an option: ", (option: string) => {
      this.handleUserInput(option);
    });
  }

  handleUserInput(option: string): void {
    switch (option) {
      case "1":
        this.uiHandler.createTask(() => this.displayMenu());
        break;
      case "2":
        this.uiHandler.handleTaskRemove(() => this.displayMenu());
        break;
      case "3":
        this.uiHandler.handleTaskComplete(() => this.displayMenu());
        break;
      case "4":
        this.uiHandler.displayTasks();
        this.displayMenu();
        break;
      case "5":
        console.log("Goodbye!");
        rl.close();
        break;
      default:
        console.log("Invalid option. Please try again.");
        this.displayMenu();
        break;
    }
  }
}

export { rl };
