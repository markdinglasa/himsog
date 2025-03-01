export enum IngredientChannel {
  INGREDIENT_GET = "/setup/ingredient/get/:Id",
  INGREDIENT_GET_ALL = "/setup/ingredient/get-all/:Id", //ProfessionId
  INGREDIENT_NEW = "/setup/ingredient/new",
  INGREDIENT_REMOVE = "/setup/ingredient/remove/:Id",
  INGREDIENT_UPDATE = "/setup/ingredient/update/:Id",

  INGREDIENT = "/setup/ingredient",
  INGREDIENT_ID = "/setup/ingredient/:Id",
}
