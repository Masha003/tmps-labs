import { ItalianIngredientsFactory } from "./factories/ItalianIngredientsFactory";
import { AmericanIngredientsFactory } from "./factories/AmericanIngredientsFactory";
import { Order } from "./models/Order";
import { PizzaOrderSystem } from "./singleton/PizzaOrderingSystem";
import { ItalianPizzaBuiler } from "./builders/ItalianPizzaBuilder";
import { AmericanPizzaBuilder } from "./builders/AmericanPizzaBuilder";

function main() {
  const orderSystem = PizzaOrderSystem.getInstance();

  const italianFactory = new ItalianIngredientsFactory();
  const americanFactory = new AmericanIngredientsFactory();

  const italianOrder = new Order("Italian");
  orderSystem.placeOrder(italianOrder);

  const italianPizzaBuilder = new ItalianPizzaBuiler(italianFactory);
  const italianPizza = italianPizzaBuilder.finalPizza();

  console.log("Prepared italian pizza: ");
  console.log(italianPizza.getFullDescription());

  const americanOrder = new Order("American");
  orderSystem.placeOrder(americanOrder);

  const americanPizzaBuilder = new AmericanPizzaBuilder(americanFactory);
  const americanPizza = americanPizzaBuilder.finalPizza();
  console.log("Prepared italian pizza: ");
  console.log(americanPizza.getFullDescription());
}

main();
