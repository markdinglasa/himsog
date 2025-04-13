import Joi from "joi";

export const mealValidator = Joi.object({
  Name: Joi.string().required(),
  Recipe: Joi.string().allow("").allow(null).optional(),
  Image: Joi.string().allow("").allow(null).optional(),
  Allergen: Joi.string().allow("").allow(null).optional(),
  CreatedBy: Joi.number().integer().positive().required(),
  DateCreated: Joi.date().optional(),
  UpdatedBy: Joi.number().integer().positive().allow(null).optional(),
  DateUpdated: Joi.date().allow(null).optional(),
});
