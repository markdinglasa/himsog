import Joi from "joi";

export const mealPlanValidator = Joi.object({
  Name: Joi.string().required(),
  Description: Joi.string().allow("").allow(null).optional(),
  Type: Joi.string().required(),
  DateCreated: Joi.date().optional(),
  DateUpdated: Joi.date().allow(null).optional(),
});
