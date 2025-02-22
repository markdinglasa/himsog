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
logging.log(RouteChannel.FEEDBACK_GET);
logging.log(RouteChannel.FEEDBACK_GET_ALL);
logging.log(RouteChannel.FEEDBACK_NEW);
logging.log(RouteChannel.FEEDBACK_REMOVE);
logging.log(RouteChannel.FEEDBACK_UPDATE);
logging.log("----------------------------------------");

export default router;
