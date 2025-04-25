import express from "express";
import { TokenHandler } from "../../middleware";
import { RouteChannel } from "../../types";
import { API_VERSION } from "../../constants";
import {
  MealPlanRequestAddController,
  MealPlanRequestGetAllByAdvocateController,
  MealPlanRequestGetAllByNutritionistController,
  MealPlanRequestGetAllController,
  MealPlanRequestGetController,
  MealPlanRequestRemoveController,
  MealPlanRequestUpdateController,
} from "../../controllers";

const router = express.Router();
router.get(
  `${API_VERSION}${RouteChannel.MEAL_PLAN_REQUEST_ID}`,
  TokenHandler.verifyToken,
  MealPlanRequestGetController,
);
router.get(
  `${API_VERSION}${RouteChannel.MEAL_PLAN_REQUEST_PARENT}`,
  TokenHandler.verifyToken,
  MealPlanRequestGetAllController,
);
router.get(
  `${API_VERSION}${RouteChannel.MEAL_PLAN_REQUEST_ADVOCATE}`,
  TokenHandler.verifyToken,
  MealPlanRequestGetAllByAdvocateController,
);
router.get(
  `${API_VERSION}${RouteChannel.MEAL_PLAN_REQUEST_NUTRITIONIST}`,
  TokenHandler.verifyToken,
  MealPlanRequestGetAllByNutritionistController,
);
router.post(
  `${API_VERSION}${RouteChannel.MEAL_PLAN_REQUEST}`,
  TokenHandler.verifyToken,
  MealPlanRequestAddController,
);
router.delete(
  `${API_VERSION}${RouteChannel.MEAL_PLAN_REQUEST_ID}`,
  TokenHandler.verifyToken,
  MealPlanRequestRemoveController,
);
router.patch(
  `${API_VERSION}${RouteChannel.MEAL_PLAN_REQUEST_ID}`,
  TokenHandler.verifyToken,
  MealPlanRequestUpdateController,
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
