import * as yup from "yup";

export const healthValidator = () => {
  return yup.object().shape({
    UserId: yup.number().integer().positive().required(),
    Weight: yup.number().required("Weight is required"),
    Height: yup.number().required("Height is required"),
    FitnessGoal: yup.string().required("Fitness Goal is required"),
    ActivityLevel: yup.string().required("Activity Level is required"),
    PrimaryDiet: yup.string().required("Primary Diet is required"),
  });
};
