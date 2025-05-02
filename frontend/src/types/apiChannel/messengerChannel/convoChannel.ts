import { BASE_URL } from "../../../shared";

export const ConvoChannel = {
  CONVO: `${BASE_URL}/messenger/convo`,
  CONVOS: `${BASE_URL}/messenger/convos?`,
  CONVO_ID: `${BASE_URL}/messenger/convo/:Id`,
  CONVO_MARK_AS_READ: `${BASE_URL}/messenger/convo/mark-as-read/:Id`,
  CONVO_USER: `${BASE_URL}/messenger/convo/user/:Id/:IsAdvocate`,
};
