import { CustomPizzaBuilder } from "./builders/CustomPizzaBuilder";
import { ItalianIngredientsFactory } from "./factories/ItalianIngredientsFactory";
import { AmericanIngredientsFactory } from "./factories/AmericanIngredientsFactory";
import { Order, OrderProps } from "./models/Order";
import { PizzaOrderSystem } from "./singleton/PizzaOrderingSystem";

// Main function to demonstrate the workflow
function main() {
  // Create ingredient factories
  const italianFactory = new ItalianIngredientsFactory();
  const americanFactory = new AmericanIngredientsFactory();

  const orderSystem = PizzaOrderSystem.getInstance();

  const italianOrderProps: OrderProps = {
    type: "Italian",
    dough: italianFactory.createDough(),
    sauce: italianFactory.createSauce(),
    cheese: italianFactory.createCheese(),
  };
  const italianOrder = new Order(italianOrderProps);
  orderSystem.placeOrder(italianOrder);

  const pizzaBuilder = new CustomPizzaBuilder();
  const italianPizza = pizzaBuilder.build(italianOrder);
  console.log(`Pizza created: ${italianPizza.description}`);
}

// Run the main function
main();
