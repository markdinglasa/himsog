import { BASE_URL } from "../../../shared";

export const UserLogChannel = {
  USER_LOG: `${BASE_URL}/transaction/user-log`,
  USER_LOG_ID: `${BASE_URL}/transaction/user-log/:Id`,
  USER_LOG_PARENT: `${BASE_URL}/transaction/user-log/u?=:Id`,
};
