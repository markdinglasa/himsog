import Joi from "joi";

export const unitValidator = Joi.object({
  //other
  Name: Joi.string().required(),
  Description: Joi.string().allow("").allow(null).optional(),
  CreatedBy: Joi.number().integer().positive().required(),
  DateCreated: Joi.date().optional(),
  UpdatedBy: Joi.number().integer().positive().allow(null).optional(),
  DateUpdated: Joi.date().allow(null).optional(),
});
