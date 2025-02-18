import Joi from "joi";

export const loginValidator = Joi.object({
  Username: Joi.string().required(),
  Password: Joi.string().required(),
  CurrentDate: Joi.date().required(),
  BranchId: Joi.number().integer().positive().required(),
});
