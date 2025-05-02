import * as yup from "yup";

export const chatValidator = () => {
  return yup.object().shape({
    AdvocateId: yup
      .number()
      .integer()
      .positive()
      .required("AdvocateId is required"),
    NutritionistId: yup
      .number()
      .integer()
      .positive()
      .required("AdvocateId is required"),
  });
};
