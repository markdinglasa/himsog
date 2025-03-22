import Joi from "joi";

export const ProfessionValidationValidator = Joi.object({
  UserId: Joi.number().integer().positive().required(),
  IsValidate: Joi.boolean().required(),
  IsRejected: Joi.boolean().required(),
  Remarks: Joi.string().allow("").allow(null).optional(),
  DateCreated: Joi.date().optional(),
  DateUpdated: Joi.date().allow(null).optional(),
});
