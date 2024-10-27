import { Sauce } from "./Sauce";

export class TomatoSauce implements Sauce {
  getDetails(): String {
    return "Sauce flavour: Tomato";
  }
}
