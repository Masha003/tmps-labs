import { Dough } from "./Dough";

export class ThinCrustDough implements Dough {
  getDetails(): string {
    return "thin_crust_dough";
  }
}
