import * as yup from "yup";

export const professionRatingValidator = () => {
  return yup.object().shape({
    UserId: yup.number().integer().positive().required(),
    Rate: yup.number().required(),
    IsHidden: yup.boolean().required(),
    Remarks: yup.string().nullable().optional(),
    CreatedBy: yup.number().integer().positive().required(),
  });
};
