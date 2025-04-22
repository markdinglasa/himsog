import Joi from "joi";

export const userMealPlanValidator = Joi.object({
  UserId: Joi.number().integer().positive().required(),
  MealPlanId: Joi.number().integer().positive().required(),
  IsActive: Joi.boolean().required(),
  DateCreated: Joi.date().iso().optional(),
  DateUpdated: Joi.date().allow(null).optional(),
});
