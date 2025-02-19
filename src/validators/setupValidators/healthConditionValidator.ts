import Joi from "joi";

export const healthConditionValidator = Joi.object({
  HealthId: Joi.number().integer().positive().required(),
  Category: Joi.string().required(),
  Description: Joi.string().allow("").allow(null).optional(),
  DateCreated: Joi.date().optional(),
  DateUpdated: Joi.date().allow(null).optional(),
});
