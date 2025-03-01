import express from "express";
import { TokenHandler } from "../../middleware";
import { RouteChannel } from "../../types";
import { API_VERSION } from "../../constants";
import {
  MealAddController,
  MealGetAllController,
  MealGetController,
  MealRemoveController,
  MealUpdateController,
} from "../../controllers";

const router = express.Router();
router.get(
  `${API_VERSION}${RouteChannel.MEAL}`,
  TokenHandler.verifyToken,
  MealGetAllController,
);
router.post(
  `${API_VERSION}${RouteChannel.MEAL}`,
  TokenHandler.verifyToken,
  MealAddController,
);
router.get(
  `${API_VERSION}${RouteChannel.MEAL_ID}`,
  TokenHandler.verifyToken,
  MealGetController,
);
router.delete(
  `${API_VERSION}${RouteChannel.MEAL_ID}`,
  TokenHandler.verifyToken,
  MealRemoveController,
);
router.patch(
  `${API_VERSION}${RouteChannel.MEAL_ID}`,
  TokenHandler.verifyToken,
  MealUpdateController,
);

logging.log("----------------------------------------");
logging.log("------------MEAL CONTROLLER-------------");
logging.log(`GET ${RouteChannel.MEAL} [get-all]`);
logging.log(`POST ${RouteChannel.MEAL} [add]`);
logging.log(`GET ${RouteChannel.MEAL_ID} [get]`);
logging.log(`DELETE ${RouteChannel.MEAL_ID} [remove]`);
logging.log(`PATCH ${RouteChannel.MEAL_ID} [update]`);
logging.log("----------------------------------------");

export default router;
