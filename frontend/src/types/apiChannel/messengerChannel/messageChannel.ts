import { BASE_URL } from "../../../shared";

export const MessageChannel = {
  MESSAGE: `${BASE_URL}/messenger/message`,
  MESSAGES: `${BASE_URL}/messenger/messages?`,
  MESSAGE_ID: `${BASE_URL}/messenger/message/:Id`,
  MESSAGE_CHAT: `${BASE_URL}/messenger/message/chat/:ChatId/:UserId`,
};
