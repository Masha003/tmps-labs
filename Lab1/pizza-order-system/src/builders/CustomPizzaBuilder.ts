import { AmericanPizza } from "../models/AmericanPizza";
import { ItalianPizza } from "../models/ItalianPizza";
import { Order } from "../models/Order";
import { Pizza } from "../models/Pizza";
import { PizzaBuilder } from "./PizzaBuilder";

export class CustomPizzaBuilder implements PizzaBuilder {
  build(order: Order): Pizza {
    const { type, dough, sauce, cheese } = order;

    switch (type) {
      case "Italian":
        return new ItalianPizza({ dough, sauce, cheese });
      case "American":
        return new AmericanPizza({ dough, sauce, cheese });
      default:
        throw new Error("Invalid pizza type!");
    }
  }
}
