import Joi from "joi";

export const mealPlanRequestValidator = Joi.object({
  //other
  CreatedBy: Joi.number().integer().positive().required(),
  DateCreated: Joi.date().iso().optional(),
  UpdatedBy: Joi.number().integer().positive().allow(null).optional(),
  DateUpdated: Joi.date().allow(null).optional(),
});
