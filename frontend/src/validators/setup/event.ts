import * as yup from "yup";

export const eventValidator = () => {
  return yup.object().shape({
    Title: yup
      .string()
      .matches(
        /^[A-Za-z\s.&)(-,]+$/,
        "Title should not contain special characters",
      )
      .required(),
    Type: yup.string().required(),
    Category: yup.string().required(),
    Description: yup.string().nullable().optional(),
    Location: yup.string().required(),
    Schedule: yup.string().datetime().required(),
    Image: yup.string().nullable().optional(),
    RegistrationLink: yup.string().nullable().optional(),
    IsValidated: yup.boolean().required(),
  });
};
