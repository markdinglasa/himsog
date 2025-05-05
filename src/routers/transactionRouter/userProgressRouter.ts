import express from "express";
import { TokenHandler } from "../../middleware";
import { RouteChannel } from "../../types";
import { API_VERSION } from "../../constants";
import {
  UserProgressAddController,
  UserProgressGetAllController,
  UserProgressGetController,
  UserProgressRemoveController,
  UserProgressUpdateController,
} from "../../controllers";

const router = express.Router();
router.get(
  `${API_VERSION}${RouteChannel.USER_PROGRESS_USER_MEAL_PLAN}`,
  TokenHandler.verifyToken,
  UserProgressGetAllController,
);
router.get(
  `${API_VERSION}${RouteChannel.USER_PROGRESS_ID}`,
  TokenHandler.verifyToken,
  UserProgressGetController,
);
router.get(
  `${API_VERSION}${RouteChannel.USER_PROGRESS_ID}`,
  TokenHandler.verifyToken,
  UserProgressGetController,
);
router.post(
  `${API_VERSION}${RouteChannel.USER_PROGRESS}`,
  TokenHandler.verifyToken,
  UserProgressAddController,
);
router.delete(
  `${API_VERSION}${RouteChannel.USER_PROGRESS_ID}`,
  TokenHandler.verifyToken,
  UserProgressRemoveController,
);
router.patch(
  `${API_VERSION}${RouteChannel.USER_PROGRESS_ID}`,
  TokenHandler.verifyToken,
  UserProgressUpdateController,
);

logging.log("----------------------------------------");
logging.log("--------USER PROGRESS CONTROLLER--------");
logging.log(`POST ${RouteChannel.USER_PROGRESS} [add]`);
logging.log(`GET ${RouteChannel.USER_PROGRESS_USER_MEAL_PLAN} [get-all]`);
logging.log(`GET ${RouteChannel.USER_PROGRESS_ID} [get]`);
logging.log(`DELETE ${RouteChannel.USER_PROGRESS_ID} [remove]`);
logging.log(`UPDATE ${RouteChannel.USER_PROGRESS_ID} [update]`);
logging.log("----------------------------------------");

export default router;
