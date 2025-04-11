import Joi from "joi";

export const articleValidator = Joi.object({
  Title: Joi.string()
    .pattern(/^[A-Za-z\s.,&-]+$/)
    .required(),
  Description: Joi.string().allow("").allow(null).optional(),
  DatePosted: Joi.string().required(),
  PostedBy: Joi.string().required(),
  IsValidated: Joi.boolean().allow(null).optional(),
  Image: Joi.string().allow("").allow(null).optional(),
  Link: Joi.string().allow("").allow(null).optional(),
  Remarks: Joi.string().allow("").allow(null).optional(),
  CreatedBy: Joi.number().integer().positive().optional(),
  DateCreated: Joi.date().optional(),
  UpdatedBy: Joi.number().integer().positive().optional(),
  DateUpdated: Joi.date().allow(null).optional(),
});
