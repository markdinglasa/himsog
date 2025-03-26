import express from "express";
import { TokenHandler } from "../../middleware";
import { RouteChannel } from "../../types";
import { API_VERSION } from "../../constants";
import {
  EventAddController,
  EventGetController,
  EventGetAllValidatedController,
  EventGetAllInValidatedController,
  EventRemoveController,
  EventUpdateController,
} from "../../controllers";

const router = express.Router();
router.get(
  `${API_VERSION}${RouteChannel.EVENT_VALIDATED}`,
  TokenHandler.verifyToken,
  EventGetAllValidatedController,
);
router.get(
  `${API_VERSION}${RouteChannel.EVENT_INVALIDATED}`,
  TokenHandler.verifyToken,
  EventGetAllInValidatedController,
);
router.post(
  `${API_VERSION}${RouteChannel.EVENT}`,
  TokenHandler.verifyToken,
  EventAddController,
);
router.get(
  `${API_VERSION}${RouteChannel.EVENT_ID}`,
  TokenHandler.verifyToken,
  EventGetController,
);
router.delete(
  `${API_VERSION}${RouteChannel.EVENT_ID}`,
  TokenHandler.verifyToken,
  EventRemoveController,
);
router.patch(
  `${API_VERSION}${RouteChannel.EVENT_ID}`,
  TokenHandler.verifyToken,
  EventUpdateController,
);

logging.log("----------------------------------------");
logging.log("--------EVENT CONTROLLER----------");
logging.log(`GET ${RouteChannel.EVENT_VALIDATED} [get-all-validated]`);
logging.log(`GET ${RouteChannel.EVENT_INVALIDATED} [get-all-invalidated]`);
logging.log(`POST ${RouteChannel.EVENT} [add]`);
logging.log(`GET ${RouteChannel.EVENT_ID} [get]`);
logging.log(`DELETE ${RouteChannel.EVENT_ID} [remove]`);
logging.log(`PATCH ${RouteChannel.EVENT_ID} [update]`);
logging.log("----------------------------------------");

export default router;
