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
  `${API_VERSION}${RouteChannel.MEAL_GET}`,
  TokenHandler.verifyToken,
  MealGetController,
);
router.get(
  `${API_VERSION}${RouteChannel.MEAL_GET_ALL}`,
  TokenHandler.verifyToken,
  MealGetAllController,
);
router.post(
  `${API_VERSION}${RouteChannel.MEAL_NEW}`,
  TokenHandler.verifyToken,
  MealAddController,
);
router.delete(
  `${API_VERSION}${RouteChannel.MEAL_REMOVE}`,
  TokenHandler.verifyToken,
  MealRemoveController,
);
router.patch(
  `${API_VERSION}${RouteChannel.MEAL_UPDATE}`,
  TokenHandler.verifyToken,
  MealUpdateController,
);

logging.log("----------------------------------------");
logging.log("------------MEAL CONTROLLER-------------");
logging.log(RouteChannel.MEAL_GET);
logging.log(RouteChannel.MEAL_GET_ALL);
logging.log(RouteChannel.MEAL_NEW);
logging.log(RouteChannel.MEAL_REMOVE);
logging.log(RouteChannel.MEAL_UPDATE);
logging.log("----------------------------------------");

export default router;
