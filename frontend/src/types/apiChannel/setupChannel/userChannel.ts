import { BASE_URL } from "../../../shared";

export const UserChannel = {
  USER_REGISTER: `${BASE_URL}/setup/user/register`,
  USER: `${BASE_URL}/setup/user`,
  USER_ID: `${BASE_URL}/setup/user/:Id`,
  USER_PHOTO: `${BASE_URL}/setup/user/photo/:Id`,
  USER_EMAIL: `${BASE_URL}/setup/user/email/:Id`,
};
