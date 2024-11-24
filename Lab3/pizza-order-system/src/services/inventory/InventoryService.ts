export interface InventoryService {
  isIngredientAvailable(ingredient: string): boolean;
  useIngredient(ingredient: string): void;
}
