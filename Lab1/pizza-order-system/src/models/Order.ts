export class Order {
  type: "Italian" | "American";

  constructor(type: "Italian" | "American") {
    this.type = type;
  }

  getOrderDetails(): string {
    // return `Order for a ${this.type} pizza with ${this.dough.getDetails()} dough, ${this.sauce.getDetails()} sauce, and ${this.cheese.getDetails()} cheese.`;
    return `Order was placed for an ${this.type} pizza. \n`;
  }
}
