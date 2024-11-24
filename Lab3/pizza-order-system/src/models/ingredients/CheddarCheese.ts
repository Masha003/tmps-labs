import { Cheese } from "./Cheese";

export class CheddarCheese implements Cheese {
  getDetails(): string {
    return "cheddar_cheese";
  }
}
