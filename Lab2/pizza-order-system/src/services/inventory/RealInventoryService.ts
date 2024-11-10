import { InventoryService } from "./InventoryService";
import * as fs from "fs";
import * as path from "path";

export class RealInventoryService implements InventoryService {
  private inventory: { [ingredient: string]: number };

  constructor() {
    this.inventory = this.loadInventory();
  }

  private loadInventory(): { [ingredient: string]: number } {
    const filePath = path.resolve(process.cwd(), "src/data/inventory.json");
    const data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data);
  }

  isIngredientAvailable(ingredient: string): boolean {
    console.log(`Checking inventory for ${ingredient}`);
    return this.inventory[ingredient] > 0;
  }

  useIngredient(ingredient: string): void {
    if (this.isIngredientAvailable(ingredient)) {
      this.inventory[ingredient] -= 1;
      console.log(
        `${ingredient} used. Remaining quantity: ${this.inventory[ingredient]}`
      );
      this.updateInventory();
    } else {
      console.log(`${ingredient} is out of stock.`);
    }
  }

  private updateInventory(): void {
    const filePath = path.join(__dirname, "inventory.json");
    fs.writeFileSync(
      filePath,
      JSON.stringify(this.inventory, null, 2),
      "utf-8"
    );
  }
}
