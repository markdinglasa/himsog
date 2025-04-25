import Joi from "joi";

export const mealPlanRequestValidator = Joi.object({
  AdvocateId: Joi.number().integer().positive().required(),
  NutritionistId: Joi.number().integer().positive().required(),
  Remarks: Joi.string().allow("").allow(null).optional(),
  MealPlanId: Joi.number().integer().allow(null).optional(),
  CreatedBy: Joi.number().integer().positive().required(),
  DateCreated: Joi.date().optional(),
  UpdatedBy: Joi.number().integer().positive().allow(null).optional(),
  DateUpdated: Joi.date().allow(null).optional(),
});
