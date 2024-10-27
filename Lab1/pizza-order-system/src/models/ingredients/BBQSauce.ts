import { Sauce } from "./Sauce";

export class BBQSauce implements Sauce {
  getDetails(): String {
    return "Sauce flavour: BBQ";
  }
}
