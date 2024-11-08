import { Dough } from "./Dough";

export class ThickCrustDough implements Dough {
  getDetails(): string {
    return "Dough Type: Thick Crust";
  }
}
