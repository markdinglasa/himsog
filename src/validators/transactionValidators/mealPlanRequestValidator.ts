import Joi from "joi";

export const mealPlanRequestValidator = Joi.object({
  UserId: Joi.number().integer().positive().required(),
  NutritionistId: Joi.number().integer().positive().required(),
  Duration: Joi.number().positive().required(),
  Remarks: Joi.string().allow("").allow(null).optional(),
  IsCustom: Joi.boolean().required(),
  mealPlanRecipeId: Joi.number().integer().required(),
  Status: Joi.string().required(),
  CreatedBy: Joi.number().integer().positive().required(),
  DateCreated: Joi.date().optional(),
  UpdatedBy: Joi.number().integer().positive().allow(null).optional(),
  DateUpdated: Joi.date().allow(null).optional(),
});
