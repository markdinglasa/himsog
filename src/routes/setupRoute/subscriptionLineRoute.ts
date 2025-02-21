import express from "express";
import { TokenHandler } from "../../middleware";
import { RouteChannel } from "../../types";
import { API_VERSION } from "../../constants";
import {
  SubscriptionLineAddController,
  SubscriptionLineGetAllController,
  SubscriptionLineGetController,
  SubscriptionLineRemoveController,
  SubscriptionLineUpdateController,
} from "../../controllers";

const router = express.Router();
router.get(
  `${API_VERSION}${RouteChannel.SUBSCRIPTION_LINE_GET}`,
  TokenHandler.verifyToken,
  SubscriptionLineGetAllController,
);
router.get(
  `${API_VERSION}${RouteChannel.SUBSCRIPTION_LINE_GET_ALL}`,
  TokenHandler.verifyToken,
  SubscriptionLineGetController,
);
router.post(
  `${API_VERSION}${RouteChannel.SUBSCRIPTION_LINE_NEW}`,
  TokenHandler.verifyToken,
  SubscriptionLineAddController,
);
router.delete(
  `${API_VERSION}${RouteChannel.SUBSCRIPTION_LINE_REMOVE}`,
  TokenHandler.verifyToken,
  SubscriptionLineRemoveController,
);
router.patch(
  `${API_VERSION}${RouteChannel.SUBSCRIPTION_LINE_UPDATE}`,
  TokenHandler.verifyToken,
  SubscriptionLineUpdateController,
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
