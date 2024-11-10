import { PizzaIngredientsFactory } from "../factories/PizzaIngredientsFactory";

export interface PizzaBuilder {
  prepare(ingredientsFactory: PizzaIngredientsFactory): void;
  bake(): string;
  cut(): string;
  box(): string;
}
