import { Dough } from "./Dough";

export class ThickCrustDough implements Dough {
  getDetails(): string {
    return "thick_crust_dough";
  }
}
