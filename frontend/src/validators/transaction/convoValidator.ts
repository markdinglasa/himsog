import * as yup from "yup";

export const convoValidator = () => {
  return yup.object().shape({
    LastMessage: yup.string().required(),
    Date: yup.date().required(),
  });
};
