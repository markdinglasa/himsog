import Joi from "joi";

export const ingredientValidator = Joi.object({
  MealId: Joi.number().integer().positive().required(),
  Name: Joi.string().required(),
  UnitId: Joi.number().integer().positive().required(),
  Quantity: Joi.number().positive().required(),
});
