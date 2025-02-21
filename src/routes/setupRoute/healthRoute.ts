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
router.get(
  `${API_VERSION}${RouteChannel.HEALTH_GET}`,
  TokenHandler.verifyToken,
  HealthGetController,
);
router.get(
  `${API_VERSION}${RouteChannel.HEALTH_GET_ALL}`,
  TokenHandler.verifyToken,
  HealthGetAllController,
);
router.post(
  `${API_VERSION}${RouteChannel.HEALTH_NEW}`,
  TokenHandler.verifyToken,
  HealthAddController,
);
router.delete(
  `${API_VERSION}${RouteChannel.HEALTH_REMOVE}`,
  TokenHandler.verifyToken,
  HealthRemoveController,
);
router.patch(
  `${API_VERSION}${RouteChannel.HEALTH_UPDATE}`,
  TokenHandler.verifyToken,
  HealthUpdateController,
);

logging.log("----------------------------------------");
logging.log("------------HEALTH CONTROLLER-----------");
logging.log(RouteChannel.HEALTH_GET);
logging.log(RouteChannel.HEALTH_GET_ALL);
logging.log(RouteChannel.HEALTH_NEW);
logging.log(RouteChannel.HEALTH_REMOVE);
logging.log(RouteChannel.HEALTH_UPDATE);
logging.log("----------------------------------------");

export default router;
