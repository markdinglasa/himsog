import Joi from "joi";

export const articleValidator = Joi.object({
  Title: Joi.string()
    .pattern(/^[A-Za-z\s.,&-]+$/)
    .required(),
  Description: Joi.string().allow("").allow(null).optional(),
  DatePosted: Joi.string().required(),
  PostedBy: Joi.string().required(),
  IsValidated: Joi.boolean().required(),
  Image: Joi.string().allow("").allow(null).optional(),
  Link: Joi.string().allow("").allow(null).optional(),
  DateCreated: Joi.date().optional(),
  DateUpdated: Joi.date().allow(null).optional(),
});
