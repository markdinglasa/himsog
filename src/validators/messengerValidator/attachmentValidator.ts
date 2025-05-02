import Joi from "joi";

export const attachmentValidator = Joi.object({
  ConvoId: Joi.number().integer().positive().required(),
  Attachtment: Joi.string().required(),
  DateCreated: Joi.date().optional(),
  DateUpdated: Joi.date().allow(null).optional(),
});
