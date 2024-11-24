import { Sauce } from "./Sauce";

export class TomatoSauce implements Sauce {
  getDetails(): string {
    return "tomato_sauce";
  }
}
