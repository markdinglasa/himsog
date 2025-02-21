import express from "express";
import { TokenHandler } from "../../middleware";
import { RouteChannel } from "../../types";
import { API_VERSION } from "../../constants";
import {
  SubscriptionAddController,
  SubscriptionGetAllController,
  SubscriptionGetController,
  SubscriptionRemoveController,
  SubscriptionUpdateController,
} from "../../controllers";

const router = express.Router();
router.get(
  `${API_VERSION}${RouteChannel.SUBSCRIPTION_GET}`,
  TokenHandler.verifyToken,
  SubscriptionGetController,
);
router.get(
  `${API_VERSION}${RouteChannel.SUBSCRIPTION_GET_ALL}`,
  TokenHandler.verifyToken,
  SubscriptionGetAllController,
);
router.post(
  `${API_VERSION}${RouteChannel.SUBSCRIPTION_NEW}`,
  TokenHandler.verifyToken,
  SubscriptionAddController,
);
router.delete(
  `${API_VERSION}${RouteChannel.SUBSCRIPTION_REMOVE}`,
  TokenHandler.verifyToken,
  SubscriptionRemoveController,
);
router.patch(
  `${API_VERSION}${RouteChannel.SUBSCRIPTION_UPDATE}`,
  TokenHandler.verifyToken,
  SubscriptionUpdateController,
);

logging.log("----------------------------------------");
logging.log("--------SUBSCRIPTION CONTROLLER---------");
logging.log(RouteChannel.SUBSCRIPTION_GET);
logging.log(RouteChannel.SUBSCRIPTION_GET_ALL);
logging.log(RouteChannel.SUBSCRIPTION_NEW);
logging.log(RouteChannel.SUBSCRIPTION_REMOVE);
logging.log(RouteChannel.SUBSCRIPTION_UPDATE);
logging.log("----------------------------------------");

export default router;
