import * as yup from "yup";

export const messageValidator = () => {
  return yup.object().shape({
    ChatId: yup.number().integer().positive().required("ConvoId is required"),
    SenderId: yup.number().integer().positive().required("ConvoId is required"), // UserId
    Contents: yup.string().required("Contents is required"),
    IsRead: yup.boolean().required(),
  });
};
