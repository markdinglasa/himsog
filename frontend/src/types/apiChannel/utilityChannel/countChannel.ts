import { BASE_URL } from "../../../shared";

export const CountChannel = {
  NUTRISTIONIST_COUNT: `${BASE_URL}/utility/n/count/:Id`,
  CLIENT_COUNT: `${BASE_URL}/utility/c/count/:Id`,
  ADMIN_COUNT: `${BASE_URL}/utility/a/count`,
  ADMIN_SUBSCRIPTION_MONTHLY_REVENUE: `${BASE_URL}/utility/a/subscription-monthly-revenue`,
  ADMIN_SUBSCRIPTION_COUNT: `${BASE_URL}/utility/a/subscription-count`,
};
