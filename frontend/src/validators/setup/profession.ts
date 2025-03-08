import * as yup from "yup";

export const professionValidator = () => {
  return yup.object().shape({
    UserId: yup.number().integer().positive().required(),
    Title: yup
      .string()
      .matches(
        /^[A-Za-z\s.&)(-,]+$/,
        "Title should not contain special characters",
      )
      .required(),
    LicenseNumber: yup
      .string()
      .matches(
        /^[0-9\s-]+$/,
        "License Number should not contain special characters",
      )
      .required(),
    YearsExp: yup.number().required(),
    Description: yup.string().nullable().optional(),
    IsVerified: yup.boolean().nullable().required(),
    Remarks: yup.string().nullable().optional(),
  });
};
