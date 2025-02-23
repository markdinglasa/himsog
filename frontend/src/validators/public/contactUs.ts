import * as yup from "yup";

export const contactUsValidator = () => {
  return yup.object().shape({
    Email: yup.string().email().required("Email is required"),
    Firstname: yup
      .string()
      .matches(
        /^[A-Za-z\s.]+$/,
        "First name should not contain number or special characters",
      )
      .required("First Name is required"),
    Lastname: yup
      .string()
      .matches(
        /^[A-Za-z\s.]+$/,
        "Last name should not contain number or special characters",
      )
      .required("Last Name is required"),
    Message: yup.string().required(),
  });
};
