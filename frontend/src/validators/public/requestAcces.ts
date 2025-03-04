import * as yup from "yup";

export const requestAccessValidator = () => {
  return yup.object().shape({
    Email: yup.string().email().required(),
    Remarks: yup.string().nullable().optional(),
    Token: yup.string().optional(),
    IsApproved: yup.boolean().required(),
  });
};
