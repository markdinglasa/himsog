import express from "express";
import { TokenHandler } from "../../middleware";
import { RouteChannel } from "../../types";
import { API_VERSION } from "../../constants";

const router = express.Router();
router.get(`${API_VERSION}${RouteChannel.MEAL_GET}`, TokenHandler.verifyToken);
router.get(
  `${API_VERSION}${RouteChannel.MEAL_GET_ALL}`,
  TokenHandler.verifyToken,
);
router.post(`${API_VERSION}${RouteChannel.MEAL_NEW}`, TokenHandler.verifyToken);
router.delete(
  `${API_VERSION}${RouteChannel.MEAL_REMOVE}`,
  TokenHandler.verifyToken,
);
router.patch(
  `${API_VERSION}${RouteChannel.MEAL_UPDATE}`,
  TokenHandler.verifyToken,
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
