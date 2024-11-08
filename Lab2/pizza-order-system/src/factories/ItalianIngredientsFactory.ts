import { Cheese } from "../models/ingredients/Cheese";
import { Dough } from "../models/ingredients/Dough";
import { MozzarellaCheese } from "../models/ingredients/MozzarellaCheese";
import { Sauce } from "../models/ingredients/Sauce";
import { ThinCrustDough } from "../models/ingredients/ThinCrustDough";
import { TomatoSauce } from "../models/ingredients/TomatoSauce";
import { PizzaIngredientsFactory } from "./PizzaIngredientsFactory";

export class ItalianIngredientsFactory implements PizzaIngredientsFactory {
  createDough(): Dough {
    return new ThinCrustDough();
  }

  createSauce(): Sauce {
    return new TomatoSauce();
  }

  createCheese(): Cheese {
    return new MozzarellaCheese();
  }
}
