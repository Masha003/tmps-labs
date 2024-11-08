import { PizzaIngredientsFactory } from "../factories/PizzaIngredientsFactory";
import { Pizza } from "../models/Pizza";

export interface PizzaBuilder {
  prepare(ingredientsFactory: PizzaIngredientsFactory): void;
  bake(): string;
  cut(): string;
  box(): string;
}
