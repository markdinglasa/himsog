import express from "express";
import { TokenHandler } from "../../middleware";
import { RouteChannel } from "../../types";
import {
  NotificationAddController,
  NotificationGetController,
  NotificationGetAllController,
  NotificationRemoveController,
  NotificationUpdateController,
} from "../../controllers";
import { API_VERSION } from "../../constants";

const router = express.Router();
router.get(
  `${API_VERSION}${RouteChannel.NOTIFICATION}`,
  TokenHandler.verifyToken,
  NotificationAddController,
);
router.get(
  `${API_VERSION}${RouteChannel.NOTIFICATION_ID}`,
  TokenHandler.verifyToken,
  NotificationGetController,
);
router.get(
  `${API_VERSION}${RouteChannel.NOTIFICATION_PARENT}`,
  TokenHandler.verifyToken,
  NotificationGetAllController,
);
router.get(
  `${API_VERSION}${RouteChannel.NOTIFICATION_ID}`,
  TokenHandler.verifyToken,
  NotificationRemoveController,
);
router.get(
  `${API_VERSION}${RouteChannel.NOTIFICATION_ID}`,
  TokenHandler.verifyToken,
  NotificationUpdateController,
);

logging.log("----------------------------------------");
logging.log("----------NOTIFICATION CONTROLLER-----------");
logging.log(`POST ${RouteChannel.NOTIFICATION} [add]`);
logging.log(`GET ${RouteChannel.NOTIFICATION_PARENT} [get-all]`);
logging.log(`GET ${RouteChannel.NOTIFICATION_ID} [get]`);
logging.log(`DELETE ${RouteChannel.NOTIFICATION_ID} [remove]`);
logging.log(`UPDATE ${RouteChannel.NOTIFICATION_ID} [update]`);
logging.log("----------------------------------------");

export default router;
