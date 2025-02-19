import Joi from "joi";

export const subscriptionValidator = Joi.object({
  Name: Joi.string()
    .pattern(/^[A-Za-z\s.,-&]+$/)
    .required(),
  Description: Joi.string().allow("").allow(null).optional(),
  Duration: Joi.number().positive().required(),
  Price: Joi.number().positive().required(),
  CreatedBy: Joi.number().integer().positive().required(),
  DateCreated: Joi.date().iso().optional(),
  UpdatedBy: Joi.number().integer().positive().allow(null).optional(),
  DateUpdated: Joi.date().allow(null).optional(),
});
