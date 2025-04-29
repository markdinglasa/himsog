import express from "express";
import { TokenHandler } from "../../middleware";
import { RouteChannel } from "../../types";
import { API_VERSION } from "../../constants";
import {
  AttachmentGetAllByConvoController,
  AttachmentGetController,
  AttachmentRemoveController,
  AttachmentUpdateController,
  AttachmentAddController,
} from "../../controllers";

const router = express.Router();
router.post(
  `${API_VERSION}${RouteChannel.ATTACHMENT}`,
  TokenHandler.verifyToken,
  AttachmentAddController,
);
router.get(
  `${API_VERSION}${RouteChannel.ATTACHMENT_ID}`,
  TokenHandler.verifyToken,
  AttachmentGetController,
);
router.get(
  `${API_VERSION}${RouteChannel.ATTACHMENT_CONVO}`,
  TokenHandler.verifyToken,
  AttachmentGetAllByConvoController,
);
router.delete(
  `${API_VERSION}${RouteChannel.ATTACHMENT_ID}`,
  TokenHandler.verifyToken,
  AttachmentRemoveController,
);
router.patch(
  `${API_VERSION}${RouteChannel.ATTACHMENT_ID}`,
  TokenHandler.verifyToken,
  AttachmentUpdateController,
);

logging.log("----------------------------------------");
logging.log("---------ATTACHMENT CONTROLLER----------");
logging.log(`POST ${RouteChannel.ATTACHMENT} [add]`);
logging.log(`GET ${RouteChannel.ATTACHMENT_CONVO} [get-all-by-convo]`);
logging.log(`GET ${RouteChannel.ATTACHMENT} [get]`);
logging.log(`DELETE ${RouteChannel.ATTACHMENT_ID} [remove]`);
logging.log(`PATCH ${RouteChannel.ATTACHMENT_ID} [update]`);
logging.log("----------------------------------------");

export default router;
