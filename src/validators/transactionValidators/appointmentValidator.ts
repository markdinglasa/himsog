import Joi from "joi";

export const appointmentValidator = Joi.object({
  UserId: Joi.number().integer().positive().required(),
  NutritionistId: Joi.number().integer().positive().required(),
  Schedule: Joi.date().required(),
  Status: Joi.string().required(),
  Remarks: Joi.string().allow("").allow(null).required(),
  CreatedBy: Joi.number().integer().positive().required(),
  DateCreated: Joi.date().optional(),
  UpdatedBy: Joi.number().integer().positive().allow(null).optional(),
  DateUpdated: Joi.date().allow(null).optional(),
});
