import Joi from "joi";

export const mealPlanLineValidator = Joi.object({
  MealPlanId: Joi.number().integer().required(),
  MealId: Joi.number().integer().required(),
  IsBreakfast: Joi.boolean().required(),
  IsLunch: Joi.boolean().required(),
  IsSnack: Joi.boolean().required(),
  IsDinner: Joi.boolean().required(),
  IsMonday: Joi.boolean().required(),
  IsTuesday: Joi.boolean().required(),
  IsWednesday: Joi.boolean().required(),
  IsThursday: Joi.boolean().required(),
  IsFriday: Joi.boolean().required(),
  IsSaturday: Joi.boolean().required(),
  IsSunday: Joi.boolean().required(),
  DateCreated: Joi.date().optional(),
  DateUpdated: Joi.date().allow(null).optional(),
});
