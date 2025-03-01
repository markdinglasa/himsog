import express from "express";
import { TokenHandler } from "../../middleware";
import { RouteChannel } from "../../types";
import { API_VERSION } from "../../constants";
import {
  FeedbackAddController,
  FeedbackGetAllController,
  FeedbackGetController,
  FeedbackRemoveController,
  FeedbackUpdateController,
} from "../../controllers";

const router = express.Router();
router.get(
  `${API_VERSION}${RouteChannel.FEEDBACK_GET}`,
  TokenHandler.verifyToken,
  FeedbackGetController,
);
router.get(
  `${API_VERSION}${RouteChannel.FEEDBACK_GET_ALL}`,
  TokenHandler.verifyToken,
  FeedbackGetAllController,
);
router.get(
  `${API_VERSION}${RouteChannel.FEEDBACK_NEW}`,
  TokenHandler.verifyToken,
  FeedbackAddController,
);
router.get(
  `${API_VERSION}${RouteChannel.FEEDBACK_REMOVE}`,
  TokenHandler.verifyToken,
  FeedbackRemoveController,
);
router.get(
  `${API_VERSION}${RouteChannel.FEEDBACK_UPDATE}`,
  TokenHandler.verifyToken,
  FeedbackUpdateController,
);

logging.log("----------------------------------------");
logging.log("----------FEEDBACK CONTROLLER-----------");
logging.log(`POST ${RouteChannel.FEEDBACK} [add]`);
logging.log(`GET ${RouteChannel.FEEDBACK_PARENT} [get-all]`);
logging.log(`GET ${RouteChannel.FEEDBACK_ID} [get]`);
logging.log(`DELETE ${RouteChannel.FEEDBACK_ID} [remove]`);
logging.log(`UPDATE ${RouteChannel.FEEDBACK_ID} [update]`);
logging.log("----------------------------------------");

export default router;
