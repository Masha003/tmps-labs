import { Sauce } from "./Sauce";

export class BBQSauce implements Sauce {
  getDetails(): string {
    return "Sauce flavour: BBQ";
  }
}
