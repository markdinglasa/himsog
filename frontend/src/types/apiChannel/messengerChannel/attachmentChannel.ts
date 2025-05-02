import { BASE_URL } from "../../../shared";

export const AttachmentChannel = {
  ATTACHMENT: `${BASE_URL}/messenger/attachment`,
  ATTACHMENTS: `${BASE_URL}/messenger/attachments?`,
  ATTACHMENT_ID: `${BASE_URL}/messenger/attachment/:Id`,
  ATTACHMENT_CONVO: `${BASE_URL}/messenger/attachment/convo/:Id`,
};
