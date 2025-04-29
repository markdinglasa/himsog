import express from "express";
import { TokenHandler } from "../../middleware";
import { RouteChannel } from "../../types";
import { API_VERSION } from "../../constants";
import {
  ChatAddController,
  ChatGetAllByAdvocateController,
  ChatGetController,
  ChatRemoveController,
  ChatUpdateController,
} from "../../controllers";

const router = express.Router();
router.post(
  `${API_VERSION}${RouteChannel.CHAT}`,
  TokenHandler.verifyToken,
  ChatAddController,
);
router.get(
  `${API_VERSION}${RouteChannel.CHAT_ID}`,
  TokenHandler.verifyToken,
  ChatGetController,
);
router.get(
  `${API_VERSION}${RouteChannel.CHAT_USER}`,
  TokenHandler.verifyToken,
  ChatGetAllByAdvocateController,
);
router.delete(
  `${API_VERSION}${RouteChannel.CHAT_ID}`,
  TokenHandler.verifyToken,
  ChatRemoveController,
);
router.patch(
  `${API_VERSION}${RouteChannel.CHAT_ID}`,
  TokenHandler.verifyToken,
  ChatUpdateController,
);

logging.log("----------------------------------------");
logging.log("------------CHAT CONTROLLER-------------");
logging.log(`POST ${RouteChannel.CHAT} [add]`);
logging.log(`GET ${RouteChannel.CHAT_USER} [get-all-by-user]`);
logging.log(`GET ${RouteChannel.CHAT} [get]`);
logging.log(`DELETE ${RouteChannel.CHAT_ID} [remove]`);
logging.log(`PATCH ${RouteChannel.CHAT_ID} [update]`);
logging.log("----------------------------------------");

export default router;
