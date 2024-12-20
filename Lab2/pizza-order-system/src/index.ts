import { ExtraCheese } from "./decorators/ExtraCheese";
import { Pepperoni } from "./decorators/Pepperoni";
import { Pineapple } from "./decorators/Pineappe";
import { PizzaOrderFacade } from "./PizzaOrderFacade";

function main() {
  const facade = new PizzaOrderFacade();

  facade.choosePizzaType("Italian");
  facade.addTopping((pizza) => new ExtraCheese(pizza));
  facade.addTopping((pizza) => new Pepperoni(pizza));
  facade.addTopping((pizza) => new Pineapple(pizza));
  facade.getPizza();

  facade.choosePizzaType("American");
  facade.addTopping((pizza) => new ExtraCheese(pizza));
  facade.addTopping((pizza) => new Pepperoni(pizza));
  facade.getPizza();
}

main();
