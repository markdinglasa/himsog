import * as yup from "yup";

export const professionSpecialistValidator = () => {
  return yup.object().shape({
    UserId: yup.number().integer().positive().required(),
    Title: yup
      .string()
      .matches(
        /^[A-Za-z\s.&)(-,]+$/,
        "Title should not contain special characters",
      )
      .required(),
    Description: yup.string().nullable().optional(),
  });
};
