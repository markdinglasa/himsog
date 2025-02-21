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
  `${API_VERSION}${RouteChannel.MEAL_PLAN_GET}`,
  TokenHandler.verifyToken,
  MealPlanGetAllController,
);
router.get(
  `${API_VERSION}${RouteChannel.MEAL_PLAN_GET_ALL}`,
  TokenHandler.verifyToken,
  MealPlanGetController,
);
router.post(
  `${API_VERSION}${RouteChannel.MEAL_PLAN_NEW}`,
  TokenHandler.verifyToken,
  MealPlanAddController,
);
router.delete(
  `${API_VERSION}${RouteChannel.MEAL_PLAN_REMOVE}`,
  TokenHandler.verifyToken,
  MealPlanRemoveController,
);
router.patch(
  `${API_VERSION}${RouteChannel.MEAL_PLAN_UPDATE}`,
  TokenHandler.verifyToken,
  MealPlanUpdateController,
);

logging.log("----------------------------------------");
logging.log("----------MEAL PLAN CONTROLLER----------");
logging.log(RouteChannel.MEAL_PLAN_GET);
logging.log(RouteChannel.MEAL_PLAN_GET_ALL);
logging.log(RouteChannel.MEAL_PLAN_NEW);
logging.log(RouteChannel.MEAL_PLAN_REMOVE);
logging.log(RouteChannel.MEAL_PLAN_UPDATE);
logging.log("----------------------------------------");

export default router;
