import { Cheese } from "./Cheese";

export class MozzarellaCheese implements Cheese {
  getDetails(): String {
    return "Cheese type: Mozzarella";
  }
}
