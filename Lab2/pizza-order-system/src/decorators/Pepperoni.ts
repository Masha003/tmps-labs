import { Pizza } from "../models/Pizza";
import { PizzaDecorator } from "./PizzaDecorator";

export class Pepperoni extends PizzaDecorator {
  getFullDescription(): string {
    return `${this.pizza.getFullDescription()}\n Added topping: - Pepperoni`;
  }
}
