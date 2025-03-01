import * as yup from "yup";

export const reminderValidator = () => {
  return yup.object().shape({
    UserId: yup.number().integer().positive().required(),
    Description: yup.string().nullable().optional(),
    Alarm: yup.string().datetime().required(),
  });
};
