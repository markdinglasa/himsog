import { BASE_URL } from "../../../shared";

export const ChatChannel = {
  CHAT: `${BASE_URL}/messenger/chat`,
  CHATS: `${BASE_URL}/messenger/chats?`,
  CHAT_ID: `${BASE_URL}/messenger/chat/:Id`,
  CHAT_USER: `${BASE_URL}/messenger/chat/user/:Id`,
};
