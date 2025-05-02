import * as yup from "yup";

export const certificateValidator = () => {
  return yup.object().shape({
    UserId: yup.number().integer().positive().required(),
    IssuedTo: yup
      .string()
      .matches(
        /^[A-Za-z\s.&)(-,]+$/,
        "IssuedTo should not contain special characters",
      )
      .required(),
    Issuer: yup
      .string()
      .matches(
        /^[A-Za-z\s.&)(-,]+$/,
        "IssuedTo should not contain special characters",
      )
      .required(),
    ExpiryDate: yup.string().required(),
    CertificateType: yup.string().required(),
    CertificateNumber: yup
      .string()

      .required(),
    AttachmentURL: yup.string().url().nullable().optional(),
  });
};
