import { ItalianIngredientsFactory } from "../factories/ItalianIngredientsFactory";
import { Cheese } from "../models/ingredients/Cheese";
import { Dough } from "../models/ingredients/Dough";
import { Sauce } from "../models/ingredients/Sauce";
import { Pizza } from "../models/Pizza";
import { PizzaBuilder } from "./PizzaBuilder";

export class ItalianPizzaBuiler implements PizzaBuilder {
  private ingredientsFactory: ItalianIngredientsFactory;
  private dough!: Dough;
  private sauce!: Sauce;
  private cheese!: Cheese;

  constructor(ingredientsFactory: ItalianIngredientsFactory) {
    this.ingredientsFactory = ingredientsFactory;
  }

  prepare(): string {
    this.dough = this.ingredientsFactory.createDough();
    this.sauce = this.ingredientsFactory.createSauce();
    this.cheese = this.ingredientsFactory.createCheese();

    return `--Ingredients for Italian Pizza-- \n 1. ${this.dough.getDetails()} \n 2. ${this.sauce.getDetails()} \n 3. ${this.cheese.getDetails()}`;
  }

  bake(): string {
    return "Bake for 25 minutes at 350";
  }

  cut(): string {
    return "Cut pizza into 8 slices";
  }

  box(): string {
    return "Place pizza in box with Italian label";
  }

  finalPizza(): Pizza {
    this.prepare();

    const pizza = new Pizza({
      type: "Italian",
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
