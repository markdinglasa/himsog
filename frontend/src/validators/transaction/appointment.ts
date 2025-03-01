import * as yup from "yup";

export const appoinmentValidator = () => {
  return yup.object().shape({
    UserId: yup.number().integer().positive().required(),
    NutritionistId: yup.number().integer().positive().required(),
    Schedule: yup.string().datetime().required(),
    Status: yup.string().required(),
    Remarks: yup.string().nullable().optional(),
    CreatedBy: yup.number().integer().positive().required(),
  });
};
