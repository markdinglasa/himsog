import * as yup from "yup";

export const certificateValidator = () => {
  return yup.object().shape({
    ProfessionId: yup.number().integer().positive().required(),
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
      .matches(/^[0-9]+$/, "IssuedTo should not contain special characters")
      .required(),
    AttachmentURL: yup.string().url().nullable().optional(),
  });
};
