import Joi from "joi";

export const notificationtValidateor = Joi.object({
  UserId: Joi.number().required(),
  Description: Joi.string().allow(null).allow("").required(),
  Link: Joi.string().allow(null).optional(),
  IsRead: Joi.boolean().required(),
  IsEmail: Joi.boolean().optional(),
  Subject: Joi.string().optional(),
  HTML: Joi.string().optional(),
  DateCreated: Joi.date().iso().optional(),
  DateUpdated: Joi.date().iso().optional(),
});
