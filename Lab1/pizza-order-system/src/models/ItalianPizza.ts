import { Pizza, PizzaProps } from "./Pizza";

export class ItalianPizza extends Pizza {
  constructor(props: PizzaProps) {
    super(props);
    this.description = `Italian ${this.description}`;
  }
}
