import Joi from "joi";

export const chatValidator = Joi.object({
  AdvocateId: Joi.number().integer().positive().required(),
  NutritionistId: Joi.number().integer().positive().required(),
  DateCreated: Joi.date().optional(),
  DateUpdated: Joi.date().allow(null).optional(),
});
