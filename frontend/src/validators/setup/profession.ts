import * as yup from "yup";

export const professionValidator = () => {
  return yup.object().shape({
    UserId: yup.number().integer().positive().required(),
    Title: yup
      .string()
      .matches(
        /^[A-Za-z\s-.&)(,]+$/,
        "Title should not contain special characters",
      )
      .required(),
    LicenseNumber: yup
      .string()
      .matches(
        /^[a-zA-Z0-9\s-]+$/,
        "License Number should not contain special characters",
      )
      .required(),
    Issuer: yup
      .string()
      .matches(
        /^[A-Za-z\s.&)(-,]+$/,
        "Issuer should not contain special characters",
      )
      .required(),
    DateIssued: yup
      .date()
      .required("Date Issued is required")
      .max(
        yup.ref("DateExpired"),
        "Date Issued should not surpass the Expiry Date",
      ), // should not surpass the expiry date
    DateExpired: yup.date().required("Expiry Date is required"),
  });
};
