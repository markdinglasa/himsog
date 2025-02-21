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
  `${API_VERSION}${RouteChannel.MEAL_PLAN_LINE_GET}`,
  TokenHandler.verifyToken,
  MealPlanLineGetAllController,
);
router.get(
  `${API_VERSION}${RouteChannel.MEAL_PLAN_LINE_GET_ALL}`,
  TokenHandler.verifyToken,
  MealPlanLineGetController,
);
router.post(
  `${API_VERSION}${RouteChannel.MEAL_PLAN_LINE_NEW}`,
  TokenHandler.verifyToken,
  MealPlanLineAddController,
);
router.delete(
  `${API_VERSION}${RouteChannel.MEAL_PLAN_LINE_REMOVE}`,
  TokenHandler.verifyToken,
  MealPlanLineRemoveController,
);
router.patch(
  `${API_VERSION}${RouteChannel.MEAL_PLAN_LINE_UPDATE}`,
  TokenHandler.verifyToken,
  MealPlanLineUpdateController,
);

logging.log("----------------------------------------");
logging.log("----------MEAL PLAN CONTROLLER----------");
logging.log(RouteChannel.MEAL_PLAN_LINE_GET);
logging.log(RouteChannel.MEAL_PLAN_LINE_GET_ALL);
logging.log(RouteChannel.MEAL_PLAN_LINE_NEW);
logging.log(RouteChannel.MEAL_PLAN_LINE_REMOVE);
logging.log(RouteChannel.MEAL_PLAN_LINE_UPDATE);
logging.log("----------------------------------------");

export default router;
