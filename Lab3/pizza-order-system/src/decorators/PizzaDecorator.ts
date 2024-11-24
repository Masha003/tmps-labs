import { Pizza } from "../models/Pizza";

export abstract class PizzaDecorator extends Pizza {
  protected pizza: Pizza;

  constructor(pizza: Pizza) {
    super({
      type: pizza.type,
      dough: pizza.dough,
      sauce: pizza.sauce,
      cheese: pizza.cheese,
    });
    this.pizza = pizza;
  }

  getFullDescription(): string {
    return this.pizza.getFullDescription();
  }
}
