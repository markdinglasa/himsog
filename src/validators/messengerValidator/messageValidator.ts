import Joi from "joi";

export const messageValidator = Joi.object({
  ConvoId: Joi.number().integer().positive().required(),
  SenderId: Joi.number().integer().positive().required(),
  Contents: Joi.string().required(),
  IsRead: Joi.boolean().required(),
  DateCreated: Joi.date().optional(),
  DateUpdated: Joi.date().allow(null).optional(),
});
