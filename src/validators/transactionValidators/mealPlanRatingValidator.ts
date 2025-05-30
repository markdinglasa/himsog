import Joi from "joi";

export const mealPlanRatingValidator = Joi.object({
  MealPlanId: Joi.number().integer().positive().required(),
  Rate: Joi.number().integer().positive().required(),
  Remarks: Joi.string().allow("").allow(null).required(),
  IsHidden: Joi.boolean().required(),
  CreatedBy: Joi.number().integer().positive().required(),
  DateCreated: Joi.date().optional(),
  UpdatedBy: Joi.number().integer().positive().allow(null).optional(),
  DateUpdated: Joi.date().allow(null).optional(),
});
