import Joi from "joi";

export const professionRatingValidator = Joi.object({
  UserId: Joi.number().integer().positive().required(),
  Rating: Joi.number().required(),
  Remarks: Joi.string().allow("").allow(null).optional(),
  CreatedBy: Joi.number().integer().positive().optional(),
  DateCreated: Joi.date().optional(),
  UpdatedBy: Joi.number().integer().positive().optional(),
  DateUpdated: Joi.date().allow(null).optional(),
});
