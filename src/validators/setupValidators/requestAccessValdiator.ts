import Joi from "joi";

export const requestAccessValidator = Joi.object({
  Email: Joi.string().email().required(),
  IsApproved: Joi.boolean().allow(null).optional(),
  Expiry: Joi.string().required(),
  DateCreated: Joi.date().optional(),
  DateUpdated: Joi.date().allow(null).optional(),
});
