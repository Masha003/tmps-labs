import { Command } from "./Command";
import { Order } from "../models/Order";
import { PizzaOrderSystem } from "../singleton/PizzaOrderingSystem";

export class PlaceOrderCommand implements Command {
  private order: Order;
  private pizzaOrderSystem: PizzaOrderSystem;

  constructor(order: Order) {
    this.order = order;
    this.pizzaOrderSystem = PizzaOrderSystem.getInstance();
  }

  execute(): void {
    this.pizzaOrderSystem.placeOrder(this.order);
  }
}
