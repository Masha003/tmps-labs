import { Command } from "../commands/Command";

export class OrderManager {
  private commandQueue: Command[] = [];
  private undoStack: Command[] = [];

  executeCommand(command: Command): void {
    command.execute();
    this.commandQueue.push(command);
    this.undoStack.push(command);
  }
}
