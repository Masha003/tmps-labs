import { AmericanIngredientsFactory } from "../factories/AmericanIngredientsFactory";
import { Cheese } from "../models/ingredients/Cheese";
import { Dough } from "../models/ingredients/Dough";
import { Sauce } from "../models/ingredients/Sauce";
import { Pizza } from "../models/Pizza";
import { PizzaBuilder } from "./PizzaBuilder";

export class AmericanPizzaBuilder implements PizzaBuilder {
  private ingredientsFactory: AmericanIngredientsFactory;
  private dough!: Dough;
  private sauce!: Sauce;
  private cheese!: Cheese;

  constructor(ingredientsFactory: AmericanIngredientsFactory) {
    this.ingredientsFactory = ingredientsFactory;
  }

  prepare(): string {
    this.dough = this.ingredientsFactory.createDough();
    this.sauce = this.ingredientsFactory.createSauce();
    this.cheese = this.ingredientsFactory.createCheese();

    return `--Ingredients for Italian Pizza-- \n 1. ${this.dough.getDetails()} \n 2. ${this.sauce.getDetails()} \n 3. ${this.cheese.getDetails()}`;
  }

  bake(): string {
    return "Bake for 35 minutes at 250";
  }

  cut(): string {
    return "Cut pizza into 4 slices";
  }

  box(): string {
    return "Place pizza in box with American label";
  }

  finalPizza(): Pizza {
    this.prepare();

    const pizza = new Pizza({
      type: "American",
      dough: this.dough,
      sauce: this.sauce,
      cheese: this.cheese,
    });

    pizza.addPreparationStep("Prepare ingredients");
    pizza.addPreparationStep(this.bake());
    pizza.addPreparationStep(this.cut());
    pizza.addPreparationStep(this.box());

    return pizza;
  }
}
