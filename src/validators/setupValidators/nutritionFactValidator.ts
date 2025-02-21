import Joi from "joi";

export const nutritionFactValidator = Joi.object({
  Mealid: Joi.number().integer().positive().required(),
  Name: Joi.string().required(),
  Description: Joi.string().allow("").allow(null).optional(),
  Percent: Joi.number().required(),
  DateCreated: Joi.date().optional(),
  DateUpdated: Joi.date().allow(null).optional(),
});
