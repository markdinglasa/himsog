import Joi from "joi";

export const payTypeValidator = Joi.object({
  UserId: Joi.number().integer().positive().required(),
  Name: Joi.string()
    .pattern(/^[A-Za-z\s.,&-]+$/)
    .required(),
  Holder: Joi.string()
    .pattern(/^[A-Za-z\s.,&-]+$/)
    .required(),
  MobileNumber: Joi.string()
    .pattern(/^(09|\+639)\d{9}$/)
    .allow(null)
    .optional(),
  DateCreated: Joi.date().optional(),
  DateUpdated: Joi.date().allow(null).optional(),
});
