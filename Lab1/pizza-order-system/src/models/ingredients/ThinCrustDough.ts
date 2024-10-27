import { Dough } from "./Dough";

export class ThinCrustDough implements Dough {
  getDetails(): String {
    return "Dough Type: Thin Crust";
  }
}
