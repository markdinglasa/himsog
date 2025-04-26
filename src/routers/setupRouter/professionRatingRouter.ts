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
  ProfessionRatingGetController,
);
router.post(
  `${API_VERSION}${RouteChannel.PROFESSION_RATING}`,
  TokenHandler.verifyToken,
  ProfessionRatingAddController,
);
router.get(
  `${API_VERSION}${RouteChannel.PROFESSION_RATINGS}`,
  TokenHandler.verifyToken,
  ProfessionRatingGetAllController,
);
router.delete(
  `${API_VERSION}${RouteChannel.PROFESSION_RATING_ID}`,
  TokenHandler.verifyToken,
  ProfessionRatingRemoveController,
);
router.patch(
  `${API_VERSION}${RouteChannel.PROFESSION_RATING_ID}`,
  TokenHandler.verifyToken,
  ProfessionRatingUpdateController,
);

logging.log("----------------------------------------");
logging.log("------PROFESSION RATING CONTROLLER------");
logging.log(`GET ${RouteChannel.PROFESSION_RATING_PARENT} [get-all]`);
logging.log(`POST ${RouteChannel.PROFESSION_RATING} [add]`);
logging.log(`GET ${RouteChannel.PROFESSION_RATING_ID} [get]`);
logging.log(`DELETE ${RouteChannel.PROFESSION_RATING_ID} [remove]`);
logging.log(`PATCH ${RouteChannel.PROFESSION_RATING_ID} [update]`);
logging.log("----------------------------------------");

export default router;
