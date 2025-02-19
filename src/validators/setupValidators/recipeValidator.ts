import Joi from "joi";

export const recipeValidator = Joi.object({
  //other
  Name: Joi.string().required(),
  Description: Joi.string().allow("").allow(null).optional(),
  Instructions: Joi.string().required(),
  Image: Joi.string().allow("").allow(null).optional(),
  CreatedBy: Joi.number().integer().positive().required(),
  DateCreated: Joi.date().optional(),
  UpdatedBy: Joi.number().integer().positive().allow(null).optional(),
  DateUpdated: Joi.date().allow(null).optional(),
});
