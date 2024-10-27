import { Order } from "../models/Order";

export class PizzaOrderSystem {
  private static instance: PizzaOrderSystem;

  private constructor() {}

  static getInstance(): PizzaOrderSystem {
    if (!PizzaOrderSystem.instance) {
      PizzaOrderSystem.instance = new PizzaOrderSystem();
    }
    return PizzaOrderSystem.instance;
  }

  placeOrder(order: Order): void {
    console.log(`Order placed for: ${order.getOrderDetails()}`);
  }
}
