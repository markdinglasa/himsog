import * as yup from "yup";

export const payTypeValidator = () => {
  return yup.object().shape({
    UserId: yup.number().integer().positive().required(),
    Name: yup
      .string()
      .matches(
        /^[A-Za-z\s.&)(-,]+$/,
        "Pay Type Name should not contain special characters",
      )
      .required(),
    Holder: yup
      .string()
      .matches(
        /^[A-Za-z\s.&)(-,]+$/,
        "Holder should not contain special characters",
      )
      .required(),
    MobileNumber: yup
      .string()
      .matches(/^(09|\+639)\d{9}$/, "Please use valid mobile number")
      .required("Mobile Number is required"),
    Image: yup.string().nullable().optional(),
  });
};
