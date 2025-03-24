import * as yup from "yup";

export const messageValidator = () => {
  return yup.object().shape({
    ConvoId: yup.number().integer().positive().required(),
    SenderId: yup.number().integer().positive().required(),
    Contents: yup.string().required(),
    IsRead: yup.boolean().required(),
  });
};
