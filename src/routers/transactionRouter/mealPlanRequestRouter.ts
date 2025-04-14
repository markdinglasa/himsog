import express from "express";
import { TokenHandler } from "../../middleware";
import { RouteChannel } from "../../types";
import { API_VERSION } from "../../constants";
import {
  MealPlanAddController,
  MealPlanGetAllController,
  MealPlanGetController,
  MealPlanRemoveController,
  MealPlanUpdateController,
} from "../../controllers";

const router = express.Router();
router.get(
  `${API_VERSION}${RouteChannel.MEAL_PLAN_REQUEST_ID}`,
  TokenHandler.verifyToken,
  MealPlanGetController,
);
router.get(
  `${API_VERSION}${RouteChannel.MEAL_PLAN_REQUEST_PARENT}`,
  TokenHandler.verifyToken,
  MealPlanGetAllController,
);
router.get(
  `${API_VERSION}${RouteChannel.MEAL_PLAN_REQUEST}`,
  TokenHandler.verifyToken,
  MealPlanAddController,
);
router.get(
  `${API_VERSION}${RouteChannel.MEAL_PLAN_REQUEST_ID}`,
  TokenHandler.verifyToken,
  MealPlanRemoveController,
);
router.get(
  `${API_VERSION}${RouteChannel.MEAL_PLAN_REQUEST_ID}`,
  TokenHandler.verifyToken,
  MealPlanUpdateController,
);

logging.log("----------------------------------------");
logging.log("------MEAL PLAN REQUEST CONTROLLER------");
logging.log(`POST ${RouteChannel.MEAL_PLAN_REQUEST} [add]`);
logging.log(`GET ${RouteChannel.MEAL_PLAN_REQUEST_PARENT} [get-all]`);
logging.log(`GET ${RouteChannel.MEAL_PLAN_REQUEST_ID} [get]`);
logging.log(`DELETE ${RouteChannel.MEAL_PLAN_REQUEST_ID} [remove]`);
logging.log(`UPDATE ${RouteChannel.MEAL_PLAN_REQUEST_ID} [update]`);
logging.log("----------------------------------------");

export default router;
