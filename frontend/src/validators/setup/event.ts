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
    //Type: yup.string().required(),
    //Category: yup.string().required(),
    Description: yup.string().nullable().optional(),
    Location: yup.string().required(),
    ScheduleDate: yup
      .date()
      .min(new Date(), "Schedule Date cannot be before the current date")
      .required(), // should not before the current date
    TimeStart: yup
      .string()
      .required()
      .test(
        "is-before-end",
        "Time Start should not be greater than Time End",
        function (value) {
          const { TimeEnd } = this.parent;
          return !TimeEnd || !value || value <= TimeEnd;
        },
      ), // time start should not be greater than the time end
    TimeEnd: yup
      .string()
      .required()
      .test(
        "is-before-end",
        "Time End should not be lesser than Time Start",
        function (value) {
          const { TimeStart } = this.parent;
          if (!TimeStart || !value) return true;
          const startTime = new Date(`1970-01-01T${TimeStart}:00`);
          const endTime = new Date(`1970-01-01T${value}:00`);
          return endTime >= startTime;
        },
      ), // should not be lesser than the time start
    Image: yup.string().nullable().optional(),
    RegistrationLink: yup.string().nullable().optional(),
    Remarks: yup.string().nullable().optional(),
    IsValidated: yup.boolean().nullable().optional(),
    CreatedBy: yup.number().integer().required(),
    UpdatedBy: yup.number().nullable().optional(),
  });
};
