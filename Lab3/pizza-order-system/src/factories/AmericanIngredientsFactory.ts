import { BBQSauce } from "../models/ingredients/BBQSauce";
import { CheddarCheese } from "../models/ingredients/CheddarCheese";
import { Cheese } from "../models/ingredients/Cheese";
import { Dough } from "../models/ingredients/Dough";
import { Sauce } from "../models/ingredients/Sauce";
import { ThickCrustDough } from "../models/ingredients/ThickCrustDough";
import { PizzaIngredientsFactory } from "./PizzaIngredientsFactory";

export class AmericanIngredientsFactory implements PizzaIngredientsFactory {
  createDough(): Dough {
    return new ThickCrustDough();
  }

  createSauce(): Sauce {
    return new BBQSauce();
  }

  createCheese(): Cheese {
    return new CheddarCheese();
  }
}
