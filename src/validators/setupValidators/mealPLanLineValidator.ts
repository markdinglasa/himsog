import Joi from "joi";

export const mealPlanLineValidator = Joi.object({
  MealPlanId: Joi.number().integer().required(),
  MealId: Joi.number().integer().required(),
  DateCreated: Joi.date().optional(),
  DateUpdated: Joi.date().allow(null).optional(),
});
