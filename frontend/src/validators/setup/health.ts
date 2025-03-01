import * as yup from "yup";

export const healthValidator = () => {
  return yup.object().shape({
    UserId: yup.number().integer().positive().required(),
    Weight: yup.number().required(),
    Height: yup.number().required(),
    FitnessGoal: yup.string().required(),
    ActivityLevel: yup.string().required(),
    PrimaryDiet: yup.string().required(),
    DieteryPreferences: yup.string().required(),
    FoodPreferences: yup.string().required(),
  });
};
