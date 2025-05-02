import express from "express";
import { TokenHandler } from "../../middleware";
import { RouteChannel } from "../../types";
import { API_VERSION } from "../../constants";
import {
  UserMealPlanActivateController,
  UserMealPlanAddController,
  UserMealPlanGetActiveByUserController,
  UserMealPlanGetAllController,
  UserMealPlanGetController,
  UserMealPlanRemoveController,
  UserMealPlanUpdateController,
} from "../../controllers";

const router = express.Router();
router.get(
  `${API_VERSION}${RouteChannel.USER_MEAL_PLAN_ACTIVE}`,
  TokenHandler.verifyToken,
  UserMealPlanGetActiveByUserController,
);
router.get(
  `${API_VERSION}${RouteChannel.USER_MEAL_PLAN_GET}`,
  TokenHandler.verifyToken,
  UserMealPlanGetController,
);
router.get(
  `${API_VERSION}${RouteChannel.USER_MEAL_PLAN_PARENT}`,
  TokenHandler.verifyToken,
  UserMealPlanGetAllController,
);
router.post(
  `${API_VERSION}${RouteChannel.USER_MEAL_PLAN}`,
  TokenHandler.verifyToken,
  UserMealPlanAddController,
);
router.delete(
  `${API_VERSION}${RouteChannel.USER_MEAL_PLAN_ID}`,
  TokenHandler.verifyToken,
  UserMealPlanRemoveController,
);
router.patch(
  `${API_VERSION}${RouteChannel.USER_MEAL_PLAN_ID}`,
  TokenHandler.verifyToken,
  UserMealPlanUpdateController,
);
router.patch(
  `${API_VERSION}${RouteChannel.USER_MEAL_PLANS}`,
  TokenHandler.verifyToken,
  UserMealPlanActivateController,
);

logging.log("----------------------------------------");
logging.log("-------USER MEAL PLAN CONTROLLER--------");
logging.log(`POST ${RouteChannel.USER_MEAL_PLAN} [add]`);
logging.log(`GET ${RouteChannel.USER_MEAL_PLAN_PARENT} [get-all]`);
logging.log(`GET ${RouteChannel.USER_MEAL_PLAN_ID} [get]`);
logging.log(`DELETE ${RouteChannel.USER_MEAL_PLAN_ID} [remove]`);
logging.log(`UPDATE ${RouteChannel.USER_MEAL_PLAN_ID} [update]`);
logging.log("----------------------------------------");

export default router;
