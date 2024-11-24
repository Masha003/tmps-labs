import { Cheese } from "./Cheese";

export class MozzarellaCheese implements Cheese {
  getDetails(): string {
    return "mozzarella_cheese";
  }
}
