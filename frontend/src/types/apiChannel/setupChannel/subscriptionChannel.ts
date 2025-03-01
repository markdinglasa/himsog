import { BASE_URL } from "../../../shared";

export const SubscriptionChannel = {
  SUBSCRIPTION_GET: "/setup/subscription/get/:Id",
  SUBSCRIPTION_GET_ALL: "/setup/subscription/get-all",
  SUBSCRIPTION_NEW: "/setup/subscription/new",
  SUBSCRIPTION_REMOVE: "/setup/subscription/remove/:Id",
  SUBSCRIPTION_UPDATE: "/setup/subscription/update/:Id",

  SUBSCRIPTION: `${BASE_URL}/setup/subscription`,
  SUBSCRIPTION_ID: `${BASE_URL}/setup/subscription/:Id`,
};
