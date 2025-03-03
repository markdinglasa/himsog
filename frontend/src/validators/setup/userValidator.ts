import * as yup from "yup";

export const userValidator = () => {
  return yup.object().shape({
    Email: yup.string().email().required("Email is required"),
    Password: yup.string().required("Password is required"),
    BirthDate: yup
      .date()
      .required("Birth Date is required")
      .test("is-adult", "Must be at least 18 years old", (value) => {
        const today = new Date();
        const birthDate = new Date(value);
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDifference = today.getMonth() - birthDate.getMonth();
        if (
          monthDifference < 0 ||
          (monthDifference === 0 && today.getDate() < birthDate.getDate())
        )
          age--;
        return age >= 18;
      }),
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
    ContactNumber: yup
      .string()
      .matches(/^(09|\+639)\d{9}$/, "Please use valid mobile number")
      .required("Mobile Number is required"),
    CivilStatus: yup.string().required("Civil Status is required"),
    Gender: yup.string().required("Gender is required"),
    Role: yup.string().required("Role is required"),
  });
};
