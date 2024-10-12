import { TaskManager } from "./services/TaskManager";
import { UIHandler } from "./ui/UIHandler";
import { MenuHandler } from "./ui/MenuHandler";
import { Task } from "./models/Task";

const taskManager = new TaskManager();
const uiHandler = new UIHandler(taskManager);
const menuHandler = new MenuHandler(uiHandler);

menuHandler.displayMenu();
