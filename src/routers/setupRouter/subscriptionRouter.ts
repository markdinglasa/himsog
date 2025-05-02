import express from "express";
import { TokenHandler } from "../../middleware";
import { RouteChannel } from "../../types";
import { API_VERSION } from "../../constants";
import {
  SubscriptionAddController,
  SubscriptionGetAllController,
  SubscriptionGetByNameController,
  SubscriptionGetController,
  SubscriptionRemoveController,
  SubscriptionUpdateController,
} from "../../controllers";

const router = express.Router();
router.get(
  `${API_VERSION}${RouteChannel.SUBSCRIPTION}`,
  TokenHandler.verifyToken,
  SubscriptionGetAllController,
);
router.post(
  `${API_VERSION}${RouteChannel.SUBSCRIPTION}`,
  TokenHandler.verifyToken,
  SubscriptionAddController,
);
router.get(
  `${API_VERSION}${RouteChannel.SUBSCRIPTION_ID}`,
  TokenHandler.verifyToken,
  SubscriptionGetController,
);
router.get(
  `${API_VERSION}${RouteChannel.SUBSCRIPTION_NAME}`,
  TokenHandler.verifyToken,
  SubscriptionGetByNameController,
);
router.delete(
  `${API_VERSION}${RouteChannel.SUBSCRIPTION_ID}`,
  TokenHandler.verifyToken,
  SubscriptionRemoveController,
);
router.patch(
  `${API_VERSION}${RouteChannel.SUBSCRIPTION_ID}`,
  TokenHandler.verifyToken,
  SubscriptionUpdateController,
);

logging.log("----------------------------------------");
logging.log("--------SUBSCRIPTION CONTROLLER---------");
logging.log(`GET ${RouteChannel.SUBSCRIPTION} [get-all]`);
logging.log(`POST ${RouteChannel.SUBSCRIPTION} [add]`);
logging.log(`GET ${RouteChannel.SUBSCRIPTION_ID} [get]`);
logging.log(`GET ${RouteChannel.SUBSCRIPTION_NAME} [getByName]`);
logging.log(`DELETE ${RouteChannel.SUBSCRIPTION_ID} [remove]`);
logging.log(`PATCH ${RouteChannel.SUBSCRIPTION_ID} [update]`);
logging.log("----------------------------------------");

export default router;
