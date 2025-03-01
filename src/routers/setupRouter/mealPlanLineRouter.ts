import express from "express";
import { TokenHandler } from "../../middleware";
import { RouteChannel } from "../../types";
import { API_VERSION } from "../../constants";
import {
  MealPlanLineAddController,
  MealPlanLineGetAllController,
  MealPlanLineGetController,
  MealPlanLineRemoveController,
  MealPlanLineUpdateController,
} from "../../controllers";

const router = express.Router();
router.get(
  `${API_VERSION}${RouteChannel.MEAL_PLAN_LINE_PARENT}`,
  TokenHandler.verifyToken,
  MealPlanLineGetController,
);
router.post(
  `${API_VERSION}${RouteChannel.MEAL_PLAN_LINE}`,
  TokenHandler.verifyToken,
  MealPlanLineAddController,
);
router.delete(
  `${API_VERSION}${RouteChannel.MEAL_PLAN_LINE_ID}`,
  TokenHandler.verifyToken,
  MealPlanLineRemoveController,
);
router.get(
  `${API_VERSION}${RouteChannel.MEAL_PLAN_LINE_ID}`,
  TokenHandler.verifyToken,
  MealPlanLineGetAllController,
);
router.patch(
  `${API_VERSION}${RouteChannel.MEAL_PLAN_LINE_ID}`,
  TokenHandler.verifyToken,
  MealPlanLineUpdateController,
);

logging.log("----------------------------------------");
logging.log("----------MEAL PLAN CONTROLLER----------");
logging.log(`GET ${RouteChannel.MEAL_PLAN_LINE_PARENT} [get-all]`);
logging.log(`POST ${RouteChannel.MEAL_PLAN_LINE} [add]`);
logging.log(`GET ${RouteChannel.MEAL_PLAN_LINE_ID} [get]`);
logging.log(`DELETE ${RouteChannel.MEAL_PLAN_LINE_ID} [remove]`);
logging.log(`PATCH ${RouteChannel.MEAL_PLAN_LINE_ID} [update]`);
logging.log("----------------------------------------");

export default router;
