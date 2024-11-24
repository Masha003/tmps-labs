import { InventoryService } from "../services/inventory/InventoryService";
import { RealInventoryService } from "../services/inventory/RealInventoryService";

export class InventoryProxy implements InventoryService {
  private realInventoryService: RealInventoryService;
  private ingredientCache: Map<string, boolean>;

  constructor() {
    this.realInventoryService = new RealInventoryService();
    this.ingredientCache = new Map();
  }

  isIngredientAvailable(ingredient: string): boolean {
    if (!this.ingredientCache.has(ingredient)) {
      const available =
        this.realInventoryService.isIngredientAvailable(ingredient);
      this.ingredientCache.set(ingredient, available);
    }
    return this.ingredientCache.get(ingredient) as boolean;
  }

  useIngredient(ingredient: string): void {
    this.realInventoryService.useIngredient(ingredient);
    this.ingredientCache.delete(ingredient);
  }
}
