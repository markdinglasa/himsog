import express from "express";
import { TokenHandler } from "../../middleware";
import { RouteChannel } from "../../types";
import { API_VERSION } from "../../constants";

const router = express.Router();
router.get(
  `${API_VERSION}${RouteChannel.HEALTH_CONDITION_GET}`,
  TokenHandler.verifyToken,
);
router.get(
  `${API_VERSION}${RouteChannel.HEALTH_CONDITION_GET_ALL}`,
  TokenHandler.verifyToken,
);
router.post(
  `${API_VERSION}${RouteChannel.HEALTH_CONDITION_NEW}`,
  TokenHandler.verifyToken,
);
router.delete(
  `${API_VERSION}${RouteChannel.HEALTH_CONDITION_REMOVE}`,
  TokenHandler.verifyToken,
);
router.patch(
  `${API_VERSION}${RouteChannel.HEALTH_CONDITION_UPDATE}`,
  TokenHandler.verifyToken,
);

logging.log("----------------------------------------");
logging.log("------HEALTH CONDITION CONTROLLER-------");
logging.log(RouteChannel.HEALTH_CONDITION_GET);
logging.log(RouteChannel.HEALTH_CONDITION_GET_ALL);
logging.log(RouteChannel.HEALTH_CONDITION_NEW);
logging.log(RouteChannel.HEALTH_CONDITION_REMOVE);
logging.log(RouteChannel.HEALTH_CONDITION_UPDATE);
logging.log("----------------------------------------");

export default router;
