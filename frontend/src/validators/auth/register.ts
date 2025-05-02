import * as yup from "yup";

export const registerValidator = () => {
  return yup.object().shape({
    Email: yup.string().email().required("Email is required"),
    Password: yup.string().required("Password is required"),
    ConfirmPassword: yup
      .string()
      .oneOf([yup.ref("Password")], "Passwords must match")
      .required("Confirm Password is required"), // should match the Password
    Role: yup.string().optional(),
  });
};
