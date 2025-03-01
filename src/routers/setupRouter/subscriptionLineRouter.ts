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
  `${API_VERSION}${RouteChannel.SUBSCRIPTION_LINE_PARENT}`,
  TokenHandler.verifyToken,
  SubscriptionLineGetController,
);
router.post(
  `${API_VERSION}${RouteChannel.SUBSCRIPTION_LINE}`,
  TokenHandler.verifyToken,
  SubscriptionLineAddController,
);
router.get(
  `${API_VERSION}${RouteChannel.SUBSCRIPTION_LINE_ID}`,
  TokenHandler.verifyToken,
  SubscriptionLineGetAllController,
);
router.delete(
  `${API_VERSION}${RouteChannel.SUBSCRIPTION_LINE_ID}`,
  TokenHandler.verifyToken,
  SubscriptionLineRemoveController,
);
router.patch(
  `${API_VERSION}${RouteChannel.SUBSCRIPTION_LINE_ID}`,
  TokenHandler.verifyToken,
  SubscriptionLineUpdateController,
);

logging.log("----------------------------------------");
logging.log("-----SUBSCRIPTION LINE CONTROLLER-------");
logging.log(`GET ${RouteChannel.SUBSCRIPTION_LINE_PARENT} [get-all]`);
logging.log(`POST ${RouteChannel.SUBSCRIPTION_LINE} [add]`);
logging.log(`GET ${RouteChannel.SUBSCRIPTION_LINE_ID} [get]`);
logging.log(`DELETE ${RouteChannel.SUBSCRIPTION_LINE_ID} [remove]`);
logging.log(`PATCH ${RouteChannel.SUBSCRIPTION_LINE_ID} [update]`);
logging.log("----------------------------------------");

export default router;
