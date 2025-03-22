import * as yup from "yup";

export const professionInstituteValidator = () => {
  return yup.object().shape({
    UserId: yup.number().integer().positive().required(),
    Name: yup
      .string()
      .matches(
        /^[A-Za-z\s.&)(-,]+$/,
        "Title should not contain special characters",
      )
      .required(),
    Address: yup.string().required(),
    DateStarted: yup
      .date()
      .required("Date Started is required")
      .max(
        yup.ref("DateEnded"),
        "Date Started should not surpass the Expiry Date",
      ), // should not surpass the expiry date
    DateEnded: yup.date().required("Date Ended is required"),
  });
};
