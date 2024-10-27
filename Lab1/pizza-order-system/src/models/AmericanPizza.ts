import { Pizza, PizzaProps } from "./Pizza";

export class AmericanPizza extends Pizza {
  constructor(props: PizzaProps) {
    super(props);
    this.description = `American ${this.description}`;
  }
}
