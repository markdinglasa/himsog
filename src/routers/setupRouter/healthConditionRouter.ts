import express from "express";
import { TokenHandler } from "../../middleware";
import { RouteChannel } from "../../types";
import { API_VERSION } from "../../constants";
import {
  HealthConditionAddController,
  HealthConditionGetAllController,
  HealthConditionGetController,
  HealthConditionRemoveController,
  HealthConditionUpdateController,
} from "../../controllers";

const router = express.Router();
router.get(
  `${API_VERSION}${RouteChannel.HEALTH_CONDITION_PARENT}`,
  TokenHandler.verifyToken,
  HealthConditionGetAllController,
);
router.post(
  `${API_VERSION}${RouteChannel.HEALTH_CONDITION}`,
  TokenHandler.verifyToken,
  HealthConditionAddController,
);
router.get(
  `${API_VERSION}${RouteChannel.HEALTH_CONDITION_ID}`,
  TokenHandler.verifyToken,
  HealthConditionGetController,
);
router.delete(
  `${API_VERSION}${RouteChannel.HEALTH_CONDITION_ID}`,
  TokenHandler.verifyToken,
  HealthConditionRemoveController,
);
router.patch(
  `${API_VERSION}${RouteChannel.HEALTH_CONDITION_ID}`,
  TokenHandler.verifyToken,
  HealthConditionUpdateController,
);

logging.log("----------------------------------------");
logging.log("------HEALTH CONDITION CONTROLLER-------");
logging.log(`GET ${RouteChannel.HEALTH_CONDITION_PARENT} [get-all]`);
logging.log(`POST ${RouteChannel.HEALTH_CONDITION} [add]`);
logging.log(`GET ${RouteChannel.HEALTH_CONDITION_ID} [get]`);
logging.log(`DELETE ${RouteChannel.HEALTH_CONDITION_ID} [remove]`);
logging.log(`PATCH ${RouteChannel.HEALTH_CONDITION_ID} [update]`);
logging.log("----------------------------------------");

export default router;
