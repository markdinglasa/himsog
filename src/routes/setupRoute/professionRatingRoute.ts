import express from "express";
import { TokenHandler } from "../../middleware";
import { RouteChannel } from "../../types";
import { API_VERSION } from "../../constants";
import {
  ProfessionRatingAddController,
  ProfessionRatingGetAllController,
  ProfessionRatingGetController,
  ProfessionRatingRemoveController,
  ProfessionRatingUpdateController,
} from "../../controllers";

const router = express.Router();
router.get(
  `${API_VERSION}${RouteChannel.PROFESSION_RATING_GET}`,
  TokenHandler.verifyToken,
  ProfessionRatingGetAllController,
);
router.get(
  `${API_VERSION}${RouteChannel.PROFESSION_RATING_GET_ALL}`,
  TokenHandler.verifyToken,
  ProfessionRatingGetController,
);
router.post(
  `${API_VERSION}${RouteChannel.PROFESSION_RATING_NEW}`,
  TokenHandler.verifyToken,
  ProfessionRatingAddController,
);
router.delete(
  `${API_VERSION}${RouteChannel.PROFESSION_RATING_REMOVE}`,
  TokenHandler.verifyToken,
  ProfessionRatingRemoveController,
);
router.patch(
  `${API_VERSION}${RouteChannel.PROFESSION_RATING_UPDATE}`,
  TokenHandler.verifyToken,
  ProfessionRatingUpdateController,
);

logging.log("----------------------------------------");
logging.log("------PROFESSION RATING CONTROLLER------");
logging.log(RouteChannel.PROFESSION_RATING_GET);
logging.log(RouteChannel.PROFESSION_RATING_GET_ALL);
logging.log(RouteChannel.PROFESSION_RATING_NEW);
logging.log(RouteChannel.PROFESSION_RATING_NEW);
logging.log(RouteChannel.PROFESSION_RATING_UPDATE);
logging.log("----------------------------------------");

export default router;
