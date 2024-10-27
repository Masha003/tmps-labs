import { Cheese } from "./Cheese";

export class CheddarCheese implements Cheese {
  getDetails(): String {
    return "Cheese type: Cheddar";
  }
}
