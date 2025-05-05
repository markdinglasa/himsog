import Joi from "joi";

export const userProgressValidator = Joi.object({
  UserMealPlanId: Joi.number().integer().positive().required(),
  BMI: Joi.number().positive().required(),
  DateCreated: Joi.date().optional(),
  DateUpdated: Joi.date().allow(null).optional(),
});
