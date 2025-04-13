import Joi from "joi";

export const nutritionFactValidator = Joi.object({
  MealId: Joi.number().integer().positive().required(),
  Name: Joi.string().required(),
  UnitId: Joi.number().integer().positive().required(),
  Quantity: Joi.number().positive().required(),
  Kilocalorie: Joi.number().positive().required(),
  DateCreated: Joi.date().optional(),
  DateUpdated: Joi.date().allow(null).optional(),
});
