import { Command } from "../commands/Command";

export class OrderManager {
  private commandQueue: Command[] = [];
  private undoStack: Command[] = [];

  executeCommand(command: Command): void {
    command.execute();
    this.commandQueue.push(command);
    this.undoStack.push(command);
  }

  undoLastCommand(): void {
    const command = this.undoStack.pop();
    if (command) {
      command.undo();
    } else {
      console.log("No commands to undo.");
    }
  }
}
