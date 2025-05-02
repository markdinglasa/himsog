import { Id, Logs } from "../generic";

export interface RecipeTable extends Id, Logs {
  Name: string;
  Description: string | null;
  Instructions: string;
  Image: string | null;
}
export type RecipeTables = RecipeTable[];
export const RecipeInitial: RecipeTable = {
  Name: "",
  Description: null,
  Instructions: "",
  Image: null,
};
