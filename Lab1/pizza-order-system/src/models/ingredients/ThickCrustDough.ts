import { Dough } from "./Dough";

export class ThickCrustDough implements Dough {
  getDetails(): String {
    return "Dough Type: Thick Crust";
  }
}
