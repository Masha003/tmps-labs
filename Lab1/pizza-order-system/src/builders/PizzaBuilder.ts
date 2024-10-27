import { Order } from "../models/Order";
import { Pizza } from "../models/Pizza";

export interface PizzaBuilder {
  build(order: Order): Pizza;
}
