import Joi from "joi";

export const loginValidator = Joi.object({
  Email: Joi.string().required(),
  Password: Joi.string().required(),
});
