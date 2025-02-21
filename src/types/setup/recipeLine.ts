import { Id, Logs } from "../generic";

export interface RecipeLineTable extends Id, Logs {
  RecipeId: number;
  IngredientId: number;
}
export type RecipeLineTables = RecipeLineTable[];
export const RecipeLineInitial: RecipeLineTable = {
  RecipeId: 0,
  IngredientId: 0,
};
