import Joi from "joi";

export const recipeLineValidator = Joi.object({
  RecipeId: Joi.number().integer().required(),
  IngredientId: Joi.number().integer().required(),
  DateCreated: Joi.date().optional(),
  DateUpdated: Joi.date().allow(null).optional(),
});
