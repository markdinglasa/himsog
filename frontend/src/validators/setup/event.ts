import * as yup from "yup";

export const eventValidator = () => {
  return yup.object().shape({
    Title: yup
      .string()
      .matches(
        /^[0-9A-Za-z\s.&)(-,]+$/,
        "Title should not contain special characters",
      )
      .required(),
    Type: yup.string().required(),
    Category: yup.string().required(),
    Description: yup.string().nullable().optional(),
    Location: yup.string().required(),
    ScheduleDate: yup.string().required(),
    TimeStart: yup.string().required(),
    TimeEnd: yup.string().required(),
    Image: yup.string().nullable().optional(),
    RegistrationLink: yup.string().nullable().optional(),
    Remarks: yup.string().nullable().optional(),
    IsValidated: yup.boolean().nullable().optional(),
    CreatedBy: yup.number().integer().required(),
    UpdatedBy: yup.number().nullable().optional(),
  });
};
