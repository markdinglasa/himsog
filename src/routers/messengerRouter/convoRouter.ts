import express from "express";
import { TokenHandler } from "../../middleware";
import { RouteChannel } from "../../types";
import { API_VERSION } from "../../constants";
import {
  ConvoAddController,
  ConvoGetAllByUserController,
  ConvoGetController,
  ConvoMarkAsReadController,
  ConvoRemoveController,
  ConvoUpdateController,
} from "../../controllers";

const router = express.Router();
router.post(
  `${API_VERSION}${RouteChannel.CONVO}`,
  TokenHandler.verifyToken,
  ConvoAddController,
);
router.get(
  `${API_VERSION}${RouteChannel.CONVO_ID}`,
  TokenHandler.verifyToken,
  ConvoGetController,
);
router.get(
  `${API_VERSION}${RouteChannel.CONVO_USER}`,
  TokenHandler.verifyToken,
  ConvoGetAllByUserController,
);
router.delete(
  `${API_VERSION}${RouteChannel.CONVO_ID}`,
  TokenHandler.verifyToken,
  ConvoRemoveController,
);
router.patch(
  `${API_VERSION}${RouteChannel.CONVO_ID}`,
  TokenHandler.verifyToken,
  ConvoUpdateController,
);
router.patch(
  `${API_VERSION}${RouteChannel.CONVO_MARK_AS_READ}`,
  TokenHandler.verifyToken,
  ConvoMarkAsReadController,
);
logging.log("----------------------------------------");
logging.log("------------CONVO CONTROLLER------------");
logging.log(`POST ${RouteChannel.CONVO} [add]`);
logging.log(`GET ${RouteChannel.CONVO_USER} [get-all-by-chat]`);
logging.log(`GET ${RouteChannel.CONVO_ID} [get]`);
logging.log(`DELETE ${RouteChannel.CONVO_ID} [remove]`);
logging.log(`PATCH ${RouteChannel.CONVO_ID} [update]`);
logging.log("----------------------------------------");

export default router;
