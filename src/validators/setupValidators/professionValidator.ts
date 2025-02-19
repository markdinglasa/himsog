import Joi from "joi";

export const professionValidator = Joi.object({
  UserId: Joi.number().integer().positive().required(),
  Title: Joi.string()
    .pattern(/^[A-Za-z\s.,&]+$/)
    .required(),
  LicenseNumber: Joi.string()
    .pattern(/^[0-9\s.-]+$/)
    .required(),
  YearExp: Joi.number().required(),
  Description: Joi.string().allow("").allow(null).optional(),
  IsVerified: Joi.boolean().required(),
  DateCreated: Joi.date().optional(),
  DateUpdated: Joi.date().allow(null).optional(),
});
