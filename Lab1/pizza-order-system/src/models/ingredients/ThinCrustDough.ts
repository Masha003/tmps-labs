import { Dough } from "./Dough";

export class ThinCrustDough implements Dough {
  getDetails(): string {
    return "Dough Type: Thin Crust";
  }
}
