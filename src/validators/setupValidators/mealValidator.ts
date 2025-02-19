import Joi from "joi";

export const mealValidator = Joi.object({
  Name: Joi.string().required(),
  Description: Joi.string().allow("").allow(null).optional(),
  Type: Joi.string().required(),
  CreatedBy: Joi.number().integer().positive().required(),
  DateCreated: Joi.date().optional(),
  UpdatedBy: Joi.number().integer().positive().allow(null).optional(),
  DateUpdated: Joi.date().allow(null).optional(),
});
