import express from "express";
import { TokenHandler } from "../../middleware";
import { RouteChannel } from "../../types";
import { API_VERSION } from "../../constants";

const router = express.Router();
router.get(
  `${API_VERSION}${RouteChannel.SUBSCRIPTION_LINE_GET}`,
  TokenHandler.verifyToken,
);
router.get(
  `${API_VERSION}${RouteChannel.SUBSCRIPTION_LINE_GET_ALL}`,
  TokenHandler.verifyToken,
);
router.post(
  `${API_VERSION}${RouteChannel.SUBSCRIPTION_LINE_NEW}`,
  TokenHandler.verifyToken,
);
router.delete(
  `${API_VERSION}${RouteChannel.SUBSCRIPTION_LINE_REMOVE}`,
  TokenHandler.verifyToken,
);
router.patch(
  `${API_VERSION}${RouteChannel.SUBSCRIPTION_LINE_UPDATE}`,
  TokenHandler.verifyToken,
);

logging.log("----------------------------------------");
logging.log("-----SUBSCRIPTION LINE CONTROLLER-------");
logging.log(RouteChannel.SUBSCRIPTION_LINE_GET);
logging.log(RouteChannel.SUBSCRIPTION_LINE_GET_ALL);
logging.log(RouteChannel.SUBSCRIPTION_LINE_NEW);
logging.log(RouteChannel.SUBSCRIPTION_LINE_REMOVE);
logging.log(RouteChannel.SUBSCRIPTION_LINE_UPDATE);
logging.log("----------------------------------------");

export default router;
