import { InventoryProxy } from "./proxies/InventoryProxy";
import { Order } from "./models/Order";
import { Pizza } from "./models/Pizza";
import { ItalianPizzaBuiler } from "./builders/ItalianPizzaBuilder";
import { AmericanPizzaBuilder } from "./builders/AmericanPizzaBuilder";
import { ItalianIngredientsFactory } from "./factories/ItalianIngredientsFactory";
import { AmericanIngredientsFactory } from "./factories/AmericanIngredientsFactory";
import { PizzaDecorator } from "./decorators/PizzaDecorator";
import { PizzaOrderSystem } from "./singleton/PizzaOrderingSystem";

export class PizzaOrderFacade {
  private inventory: InventoryProxy;
  private orderType: "Italian" | "American" | null = null;
  private toppings: ((pizza: Pizza) => PizzaDecorator)[] = [];

  constructor() {
    this.inventory = new InventoryProxy();
  }

  public choosePizzaType(type: "Italian" | "American") {
    this.orderType = type;
  }

  public addTopping(decorator: (pizza: Pizza) => PizzaDecorator) {
    this.toppings.push(decorator);
  }

  public getPizza() {
    if (!this.orderType) {
      console.log("Please select a pizza type before placing an order.");
      return;
    }

    let builder;
    let order;
    if (this.orderType === "Italian") {
      const ingredientsFactory = new ItalianIngredientsFactory();
      builder = new ItalianPizzaBuiler(ingredientsFactory);
      order = new Order("Italian");
    } else {
      const ingredientsFactory = new AmericanIngredientsFactory();
      builder = new AmericanPizzaBuilder(ingredientsFactory);
      order = new Order("American");
    }

    const pizzaOrderSystem = PizzaOrderSystem.getInstance();

    console.log("=== Order Placed ===");
    pizzaOrderSystem.placeOrder(order);
    console.log("Required ingredients:");

    let pizza = builder.finalPizza();

    const ingredients = [
      pizza.dough.getDetails(),
      pizza.sauce.getDetails(),
      pizza.cheese.getDetails(),
    ];
    ingredients.forEach((ingredient) => {
      console.log(` - ${ingredient}`);
    });

    console.log("\n=== Checking Inventory ===");
    const allAvailable = ingredients.every((ingredient) => {
      const available = this.inventory.isIngredientAvailable(ingredient);
      console.log(
        available
          ? `${ingredient} is available.`
          : `${ingredient} is out of stock!`
      );
      return available;
    });

    if (allAvailable) {
      console.log("\n=== All Ingredients Available ===");
      console.log("Proceeding with pizza preparation...");

      for (const topping of this.toppings) {
        pizza = topping(pizza);
      }

      ingredients.forEach((ingredient) =>
        this.inventory.useIngredient(ingredient)
      );

      console.log("\n=== Preparation Steps ===");
      console.log(pizza.getFullDescription());

      console.log("\nOrder placed successfully! Take your pizza! \n");
    } else {
      console.log("\nNo pizza :(. Some ingredients are out of stock.\n");
    }

    this.orderType = null;
    this.toppings = [];
  }
}
