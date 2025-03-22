import * as yup from "yup";

export const professionRatingValidator = () => {
  return yup.object().shape({
    UserId: yup.number().integer().positive().required(),
    Rating: yup.number().required(),
    Remarks: yup.string().nullable().optional(),
    CreatedBy: yup.number().integer().positive().required(),
  });
};
