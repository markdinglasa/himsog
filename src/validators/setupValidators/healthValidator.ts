import Joi from "joi";

export const healthValidator = Joi.object({
  UserId: Joi.number().integer().positive().required(),
  Weight: Joi.number().required(), // KG
  Height: Joi.number().required(), // CM
  FitnessGoal: Joi.string().required(),
  ActivityLevel: Joi.string().required(),
  PrimaryDiet: Joi.string().required(),
  DieteryPreferences: Joi.string().required(),
  DateCreated: Joi.date().optional(),
  DateUpdated: Joi.date().allow(null).optional(),
});
