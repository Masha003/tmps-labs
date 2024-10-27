import { Cheese } from "./ingredients/Cheese";
import { Dough } from "./ingredients/Dough";
import { Sauce } from "./ingredients/Sauce";

export interface PizzaProps {
  dough: Dough;
  sauce: Sauce;
  cheese: Cheese;
}

export abstract class Pizza {
  dough: Dough;
  sauce: Sauce;
  cheese: Cheese;
  description: string;

  constructor({ dough, sauce, cheese }: PizzaProps) {
    this.dough = dough;
    this.sauce = sauce;
    this.cheese = cheese;
    this.description = `Pizza ingredents: \n ${dough.getDetails()} \n ${sauce.getDetails()} \n ${cheese.getDetails()} \n`;
  }
}
