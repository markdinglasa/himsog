import express from "express";
import { TokenHandler } from "../../middleware";
import { RouteChannel } from "../../types";
import { API_VERSION } from "../../constants";
import {
  MessageAddController,
  MessageGetAllByChatController,
  MessageGetController,
  MessageRemoveController,
  MessageUpdateController,
} from "../../controllers";

const router = express.Router();
router.post(
  `${API_VERSION}${RouteChannel.MESSAGE}`,
  TokenHandler.verifyToken,
  MessageAddController,
);
router.get(
  `${API_VERSION}${RouteChannel.MESSAGE_ID}`,
  TokenHandler.verifyToken,
  MessageGetController,
);
router.get(
  `${API_VERSION}${RouteChannel.MESSAGE_CHAT}`,
  TokenHandler.verifyToken,
  MessageGetAllByChatController,
);
router.delete(
  `${API_VERSION}${RouteChannel.MESSAGE_ID}`,
  TokenHandler.verifyToken,
  MessageRemoveController,
);
router.patch(
  `${API_VERSION}${RouteChannel.MESSAGE_ID}`,
  TokenHandler.verifyToken,
  MessageUpdateController,
);

logging.log("----------------------------------------");
logging.log("-----------MESSAGE CONTROLLER-----------");
logging.log(`POST ${RouteChannel.MESSAGE} [add]`);
logging.log(`GET ${RouteChannel.MESSAGE_CHAT} [get-all-by-chat]`);
logging.log(`GET ${RouteChannel.MESSAGE_ID} [get]`);
logging.log(`DELETE ${RouteChannel.MESSAGE_ID} [remove]`);
logging.log(`PATCH ${RouteChannel.MESSAGE_ID} [update]`);
logging.log("----------------------------------------");

export default router;
