import Joi from "joi";

export const professionRatingValidator = Joi.object({
  ProfeissionId: Joi.number().integer().positive().required(),
  Rating: Joi.number().required(),
  Remarks: Joi.string().allow("").allow(null).optional(),
  DateCreated: Joi.date().optional(),
  DateUpdated: Joi.date().allow(null).optional(),
});
