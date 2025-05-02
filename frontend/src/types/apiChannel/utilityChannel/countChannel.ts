import { BASE_URL } from "../../../shared";

export const CountChannel = {
  NUTRISTIONIST_COUNT: `${BASE_URL}/utility/n/count/:Id`,
  NUTRISTIONIST_MEAL_PLAN_MONTHLY_REVENUE: `${BASE_URL}/utility/n/meal-plan-monthly-revenue/:Id`,
  NUTRISTIONIST_MEAL_PLAN_DAILY_REVENUE: `${BASE_URL}/utility/n/meal-plan-daily-revenue/:Id`,

  CLIENT_COUNT: `${BASE_URL}/utility/c/count/:Id`,

  ADMIN_COUNT: `${BASE_URL}/utility/a/count`,
  ADMIN_SUBSCRIPTION_MONTHLY_REVENUE: `${BASE_URL}/utility/a/subscription-monthly-revenue`,
  ADMIN_SUBSCRIPTION_COUNT: `${BASE_URL}/utility/a/subscription-count`,
  ADMIN_SUBSCRIPTION_MONTHLY_REVENUE_WITH_PERCENTAGE: `${BASE_URL}/utility/a/subscription-monthly-revenue-with-percentage?year=:year`,
  ADMIN_SUBSCRIPTION_DAILY_REVENUE_WITH_PERCENTAGE: `${BASE_URL}/utility/a/subscription-daily-revenue-with-percentage`,
  ADMIN_USER_REPORT: `${BASE_URL}/utility/a/user-reports?year=:year`,
};
