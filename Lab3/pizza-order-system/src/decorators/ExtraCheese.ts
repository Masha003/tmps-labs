import { Pizza } from "../models/Pizza";
import { PizzaDecorator } from "./PizzaDecorator";

export class ExtraCheese extends PizzaDecorator {
  getFullDescription(): string {
    return `${this.pizza.getFullDescription()}\n Added topping: - Extra Cheese`;
  }
}
