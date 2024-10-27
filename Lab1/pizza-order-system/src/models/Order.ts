import { Cheese } from "./ingredients/Cheese";
import { Dough } from "./ingredients/Dough";
import { Sauce } from "./ingredients/Sauce";

export interface OrderProps {
  type: "Italian" | "American";
  dough: Dough;
  sauce: Sauce;
  cheese: Cheese;
}

export class Order {
  type: "Italian" | "American";
  dough: Dough;
  sauce: Sauce;
  cheese: Cheese;

  constructor({ type, dough, sauce, cheese }: OrderProps) {
    this.type = type;
    this.dough = dough;
    this.sauce = sauce;
    this.cheese = cheese;
  }

  getOrderDetails(): string {
    // return `Order for a ${this.type} pizza with ${this.dough.getDetails()} dough, ${this.sauce.getDetails()} sauce, and ${this.cheese.getDetails()} cheese.`;
    return `Order was placed for an ${this.type} pizza. \n`;
  }
}
