import Joi from "joi";

export const requestAccessValidator = Joi.object({
  Email: Joi.string().email().required(),
  Remarks: Joi.string().allow("").allow(null).optional(),
  IsApproved: Joi.boolean().optional(),
  Token: Joi.string().allow("").optional(),
  DateCreated: Joi.date().optional(),
  DateUpdated: Joi.date().allow(null).optional(),
});
