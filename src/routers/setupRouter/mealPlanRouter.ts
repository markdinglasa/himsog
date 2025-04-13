import express from "express";
import { TokenHandler } from "../../middleware";
import { RouteChannel } from "../../types";
import { API_VERSION } from "../../constants";
import {
  MealPlanAddController,
  MealPlanGetAllController,
  MealPlanGetController,
  MealPlanGetWithQueryController,
  MealPlanRemoveController,
  MealPlanUpdateController,
} from "../../controllers";

const router = express.Router();
router.get(
  `${API_VERSION}${RouteChannel.MEAL_PLANS}`,
  TokenHandler.verifyToken,
  MealPlanGetWithQueryController,
);
router.get(
  `${API_VERSION}${RouteChannel.MEAL_PLAN_PARENT}`,
  TokenHandler.verifyToken,
  MealPlanGetController,
);
router.post(
  `${API_VERSION}${RouteChannel.MEAL_PLAN}`,
  TokenHandler.verifyToken,
  MealPlanAddController,
);
router.get(
  `${API_VERSION}${RouteChannel.MEAL_PLAN_ID}`,
  TokenHandler.verifyToken,
  MealPlanGetAllController,
);

router.delete(
  `${API_VERSION}${RouteChannel.MEAL_PLAN_ID}`,
  TokenHandler.verifyToken,
  MealPlanRemoveController,
);
router.patch(
  `${API_VERSION}${RouteChannel.MEAL_PLAN_ID}`,
  TokenHandler.verifyToken,
  MealPlanUpdateController,
);

logging.log("----------------------------------------");
logging.log("----------MEAL PLAN CONTROLLER----------");
logging.log(`GET ${RouteChannel.MEAL_PLAN_PARENT} [get-all]`);
logging.log(`POST ${RouteChannel.MEAL_PLAN} [add]`);
logging.log(`GET ${RouteChannel.MEAL_PLAN_ID} [get]`);
logging.log(`DELETE ${RouteChannel.MEAL_PLAN_ID} [remove]`);
logging.log(`PATCH ${RouteChannel.MEAL_PLAN_ID} [update]`);
logging.log("----------------------------------------");

export default router;
