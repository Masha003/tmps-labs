import { Cheese } from "../models/ingredients/Cheese";
import { Dough } from "../models/ingredients/Dough";
import { Sauce } from "../models/ingredients/Sauce";

export interface PizzaIngredientsFactory {
  createDough(): Dough;
  createSauce(): Sauce;
  createCheese(): Cheese;
}
