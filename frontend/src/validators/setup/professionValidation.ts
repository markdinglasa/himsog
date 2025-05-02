import * as yup from "yup";

export const professionValidation = () => {
  return yup.object().shape({
    UserId: yup.number().integer().positive().required(),
    IsValidated: yup.boolean().required(),
    IsRejected: yup.boolean().required(),
    Remarks: yup.string().nullable().optional(),
  });
};
