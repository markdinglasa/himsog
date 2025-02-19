import Joi from "joi";

export const userValidator = Joi.object({
  Email: Joi.string().email().required(),
  Password: Joi.string().min(8).allow("").allow(null).required(),
  Firstname: Joi.string()
    .pattern(/^[A-Za-z\s.,-]+$/)
    .required(),
  Lastname: Joi.string()
    .pattern(/^[A-Za-z\s.,-]+$/)
    .required(),
  Middlename: Joi.string()
    .pattern(/^[A-Za-z\s.,-]+$/)
    .allow(null)
    .optional(),
  ContactNumber: Joi.string()
    .pattern(/^[0-9\s-]+$/)
    .allow(null)
    .optional(),
  CivilStatus: Joi.string()
    .valid("single", "married", "divorced", "widowed", "legally-separated")
    .required(),
  Role: Joi.string()
    .valid("administrator", "client", "nutritionist")
    .required(),
  ProfilePhoto: Joi.string().allow("").allow(null).optional(),
  IsSuspended: Joi.boolean().required(),
  CreatedBy: Joi.number().integer().positive().required(),
  DateCreated: Joi.date().iso().optional(),
  UpdatedBy: Joi.number().integer().positive().allow(null).optional(),
  DateUpdated: Joi.date().allow(null).optional(),
});
