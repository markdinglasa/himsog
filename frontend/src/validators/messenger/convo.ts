import * as yup from "yup";

export const convoValidator = () => {
  return yup.object().shape({
    ChatId: yup.number().integer().positive().required("ChatId is required"),
    Name: yup.string().required("Name is required"),
    LastMessage: yup.string().optional(),
  });
};
