import Joi from "joi";

export const feedbackValidator = Joi.object({
  UserId: Joi.number().integer().positive().required(),
  Type: Joi.string().required(),
  MealPlanId: Joi.number().integer().required(),
  Remarks: Joi.string().allow("").allow(null).optional(),
  Rating: Joi.number().positive().required(),
  CreatedBy: Joi.number().integer().positive().required(),
  DateCreated: Joi.date().optional(),
  UpdatedBy: Joi.number().integer().positive().allow(null).optional(),
  DateUpdated: Joi.date().allow(null).optional(),
});
