import { TaskManager } from "./services/TaskManager";
import { UIHandler } from "./ui/UIHandler";
import { TaskPersistence } from "./storage/TaskPersistence";
import { MenuHandler } from "./ui/MenuHandler";

const taskPersistence = new TaskPersistence(); // Creates persistence layer
const taskManager = new TaskManager(taskPersistence); // Injects persistence into TaskManager
const uiHandler = new UIHandler(taskManager);
const menuHandler = new MenuHandler(taskManager, uiHandler); // Handle menu

menuHandler.displayMenu();
