import { BASE_URL } from "../../../shared";

export const SubscriptionLineChannel = {
  SUBSCRIPTION_LINE: `${BASE_URL}/setup/subscription-line`,
  SUBSCRIPTION_LINE_ID: `${BASE_URL}/setup/subscription-line/:Id`,
  SUBSCRIPTION_LINE_USER: `${BASE_URL}/setup/subscription-line/user/:Id`,
  SUBSCRIPTION_LINE_PARENT: `${BASE_URL}/setup/subscription-line/subscription/:Id`,
};
