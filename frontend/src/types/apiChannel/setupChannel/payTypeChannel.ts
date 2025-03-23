import { BASE_URL } from "../../../shared";

export const PayTypeChannel = {
  PAY_TYPE: `${BASE_URL}/setup/pay-type`,
  PAY_TYPE_ID: `${BASE_URL}/setup/pay-type/:Id`,
  PAY_TYPE_PARENT: `${BASE_URL}/setup/pay-type/user/:Id`,
};
