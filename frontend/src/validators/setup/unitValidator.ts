import * as yup from "yup";

export const unitValidator = () => {
  return yup.object().shape({
    Name: yup
      .string()
      .matches(
        /^[A-Za-z\s.)(-,]+$/,
        "Name should not contain special characters",
      )
      .required("Unit is required"),
    Description: yup.string().nullable().optional(),
    CreatedBy: yup.number().integer().positive().required(),
  });
};
