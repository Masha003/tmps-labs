export class Order {
  type: "Italian" | "American";

  constructor(type: "Italian" | "American") {
    this.type = type;
  }

  getOrderDetails(): string {
    return `Order was placed for an ${this.type} pizza. \n`;
  }
}
