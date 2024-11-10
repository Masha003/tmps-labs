import { Cheese } from "./ingredients/Cheese";
import { Dough } from "./ingredients/Dough";
import { Sauce } from "./ingredients/Sauce";

export interface PizzaProps {
  type: string;
  dough: Dough;
  sauce: Sauce;
  cheese: Cheese;
}

export class Pizza {
  type: string;
  dough: Dough;
  sauce: Sauce;
  cheese: Cheese;
  description: string;
  preparationSteps: string[];

  constructor({ type, dough, sauce, cheese }: PizzaProps) {
    this.type = type;
    this.dough = dough;
    this.sauce = sauce;
    this.cheese = cheese;
    this.description = `${type} Pizza`;
    this.preparationSteps = [];
  }

  addPreparationStep(step: string): void {
    this.preparationSteps.push(step);
  }

  getFullDescription(): string {
    return `${this.description}\nPreparation:\n${this.preparationSteps.join(
      "\n"
    )}`;
  }
}
