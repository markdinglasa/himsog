import Joi from "joi";

export const mealPlanValidator = Joi.object({
  UserId: Joi.number().positive().integer().required(),
  Name: Joi.string().required(),
  Description: Joi.string().allow("").allow(null).optional(),
  Type: Joi.string().required(),
  Duration: Joi.number().positive().required(),
  Price: Joi.number().optional(),
  Diet: Joi.string().required(),
  DateCreated: Joi.date().optional(),
  DateUpdated: Joi.date().allow(null).optional(),
});
