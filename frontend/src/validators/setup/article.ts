import * as yup from "yup";

export const articleValidator = () => {
  return yup.object().shape({
    Title: yup
      .string()
      .matches(
        /^[A-Za-z\s.&)(-,]+$/,
        "Title should not contain special characters",
      )
      .required(),
    Description: yup.string().nullable().optional(),
    DatePosted: yup.string().required(),
    PostedBy: yup.string().required(),
    IsValidated: yup.boolean().nullable().optional(),
    Image: yup.string().nullable().optional(),
    Link: yup.string().url().nullable().optional(),
    Remarks: yup.string().url().nullable().optional(),
    RequestAccessId: yup.number().nullable().optional(),
  });
};
