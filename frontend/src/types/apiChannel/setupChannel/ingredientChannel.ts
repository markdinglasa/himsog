import { BASE_URL } from "../../../shared";

export const IngredientChannel = {
  INGREDIENT_GET: "/setup/ingredient/get/:Id",
  INGREDIENT_GET_ALL: "/setup/ingredient/get-all/:Id", //ProfessionId
  INGREDIENT_NEW: "/setup/ingredient/new",
  INGREDIENT_REMOVE: "/setup/ingredient/remove/:Id",
  INGREDIENT_UPDATE: "/setup/ingredient/update/:Id",
  INGREDIENT: `${BASE_URL}/setup/ingredient`,
  INGREDIENT_ID: `${BASE_URL}/setup/ingredient/:Id`,
};
