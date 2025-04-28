import express from "express";
import { TokenHandler } from "../../middleware";
import { RouteChannel } from "../../types";
import { API_VERSION } from "../../constants";
import {
  AdminGetAllCount,
  AdminGetSubscriptionCount,
  AdminGetSubscriptionDailyRevenueWithPercentage,
  AdminGetSubscriptionMonthlyRevenue,
  AdminGetSubscriptionMonthlyRevenueWithPercentage,
  ClientGetAllCount,
  NutritionistGetAllCount,
  NutritionistGetMealPlanDailyRevenueWithPercentage,
  NutritionistGetMealPlanMonthlyRevenueWithPercentage,
} from "../../controllers";

const router = express.Router();
router.get(
  `${API_VERSION}${RouteChannel.NUTRISTIONIST_COUNT}`,
  TokenHandler.verifyToken,
  NutritionistGetAllCount,
);
router.get(
  `${API_VERSION}${RouteChannel.NUTRISTIONIST_MEAL_PLAN_MONTHLY_REVENUE}`,
  TokenHandler.verifyToken,
  NutritionistGetMealPlanMonthlyRevenueWithPercentage,
);
router.get(
  `${API_VERSION}${RouteChannel.NUTRISTIONIST_MEAL_PLAN_DAILY_REVENUE}`,
  TokenHandler.verifyToken,
  NutritionistGetMealPlanDailyRevenueWithPercentage,
);
router.get(
  `${API_VERSION}${RouteChannel.CLIENT_COUNT}`,
  TokenHandler.verifyToken,
  ClientGetAllCount,
);
router.get(
  `${API_VERSION}${RouteChannel.ADMIN_COUNT}`,
  TokenHandler.verifyToken,
  AdminGetAllCount,
);
router.get(
  `${API_VERSION}${RouteChannel.ADMIN_SUBSCRIPTION_COUNT}`,
  TokenHandler.verifyToken,
  AdminGetSubscriptionCount,
);
router.get(
  `${API_VERSION}${RouteChannel.ADMIN_SUBSCRIPTION_MONTHLY_REVENUE}`,
  TokenHandler.verifyToken,
  AdminGetSubscriptionMonthlyRevenue,
);
router.get(
  `${API_VERSION}${RouteChannel.ADMIN_SUBSCRIPTION_MONTHLY_REVENUE_WITH_PERCENTAGE}`,
  TokenHandler.verifyToken,
  AdminGetSubscriptionMonthlyRevenueWithPercentage,
);
router.get(
  `${API_VERSION}${RouteChannel.ADMIN_SUBSCRIPTION_DAILY_REVENUE_WITH_PERCENTAGE}`,
  TokenHandler.verifyToken,
  AdminGetSubscriptionDailyRevenueWithPercentage,
);
logging.log("----------------------------------------");
logging.log("----------COUNT CONTROLLER-----------");
logging.log(`GET ${RouteChannel.NUTRISTIONIST_COUNT} [get-all]`);
logging.log(`GET ${RouteChannel.CLIENT_COUNT} [get-all]`);
logging.log(`GET ${RouteChannel.ADMIN_COUNT} [get-all]`);
logging.log(
  `GET ${RouteChannel.ADMIN_SUBSCRIPTION_COUNT} [subscription-count]`,
);
logging.log(
  `GET ${RouteChannel.ADMIN_SUBSCRIPTION_MONTHLY_REVENUE} [subscription-monthly-revenue]`,
);
logging.log("----------------------------------------");

export default router;
