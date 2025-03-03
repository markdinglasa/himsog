import express from "express";
import { TokenHandler } from "../../middleware";
import { RouteChannel } from "../../types";
import { API_VERSION } from "../../constants";
import {
  HealthAddController,
  HealthGetAllController,
  HealthGetController,
  HealthRemoveController,
  HealthUpdateController,
} from "../../controllers";

const router = express.Router();

router.post(
  `${API_VERSION}${RouteChannel.HEALTH}`,
  TokenHandler.verifyToken,
  HealthAddController,
);
router.get(
  `${API_VERSION}${RouteChannel.HEALTH}`,
  TokenHandler.verifyToken,
  HealthGetAllController,
);
router.get(
  `${API_VERSION}${RouteChannel.HEALTH_ID}`,
  TokenHandler.verifyToken,
  HealthGetController,
);
router.delete(
  `${API_VERSION}${RouteChannel.HEALTH_ID}`,
  TokenHandler.verifyToken,
  HealthRemoveController,
);
router.patch(
  `${API_VERSION}${RouteChannel.HEALTH_ID}`,
  TokenHandler.verifyToken,
  HealthUpdateController,
);

logging.log("----------------------------------------");
logging.log("------------HEALTH CONTROLLER-----------");
logging.log(`GET ${RouteChannel.HEALTH} [get-all]`);
logging.log(`POST ${RouteChannel.HEALTH} [add]`);
logging.log(`GET ${RouteChannel.HEALTH_ID} [get]`);
logging.log(`DELETE ${RouteChannel.HEALTH_ID} [remove]`);
logging.log(`PATCH ${RouteChannel.HEALTH_ID} [update]`);
logging.log("----------------------------------------");

export default router;
