import { BASE_URL } from "../../../shared";

export const RequestAccessChannel = {
  REQUEST_ACCESS: `${BASE_URL}/transaction/request-access`,
  REQUEST_ACCESS_ID: `${BASE_URL}/transaction/request-access/:Id`,
  REQUEST_ACCESS_PARENT: `${BASE_URL}/transaction/request-access/email?=:Id`,
};
