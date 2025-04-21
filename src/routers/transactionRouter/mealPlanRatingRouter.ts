import express from "express";
import { TokenHandler } from "../../middleware";
import { RouteChannel } from "../../types";
import { API_VERSION } from "../../constants";
import {
  MealPlanRatingAddController,
  MealPlanRatingGetAllController,
  MealPlanRatingGetController,
  MealPlanRatingRemoveController,
  MealPlanRatingUpdateController,
} from "../../controllers";

const router = express.Router();
router.get(
  `${API_VERSION}${RouteChannel.MEAL_PLAN_RATING_ID}`,
  TokenHandler.verifyToken,
  MealPlanRatingGetController,
);
router.get(
  `${API_VERSION}${RouteChannel.MEAL_PLAN_RATINGS}`,
  TokenHandler.verifyToken,
  MealPlanRatingGetAllController,
);
router.post(
  `${API_VERSION}${RouteChannel.MEAL_PLAN_RATING}`,
  TokenHandler.verifyToken,
  MealPlanRatingAddController,
);
router.delete(
  `${API_VERSION}${RouteChannel.MEAL_PLAN_RATING_ID}`,
  TokenHandler.verifyToken,
  MealPlanRatingRemoveController,
);
router.patch(
  `${API_VERSION}${RouteChannel.MEAL_PLAN_RATING_ID}`,
  TokenHandler.verifyToken,
  MealPlanRatingUpdateController,
);

logging.log("----------------------------------------");
logging.log("------MEAL PLAN RATING CONTROLLER------");
logging.log(`POST ${RouteChannel.MEAL_PLAN_RATING} [add]`);
logging.log(`GET ${RouteChannel.MEAL_PLAN_RATINGS} [get-all]`);
logging.log(`GET ${RouteChannel.MEAL_PLAN_RATING_ID} [get]`);
logging.log(`DELETE ${RouteChannel.MEAL_PLAN_RATING_ID} [remove]`);
logging.log(`UPDATE ${RouteChannel.MEAL_PLAN_RATING_ID} [update]`);
logging.log("----------------------------------------");

export default router;
