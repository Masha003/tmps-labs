import { TaskManager } from "./services/TaskManager";
import { UIHandler } from "./ui/UIHandler";
import { MenuHandler } from "./ui/MenuHandler";

const tasks: [] = [];
const taskManager = new TaskManager(tasks);
const uiHandler = new UIHandler(taskManager);
const menuHandler = new MenuHandler(taskManager, uiHandler);

menuHandler.displayMenu();
