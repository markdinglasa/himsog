import express from "express";
import { TokenHandler } from "../../middleware";
import { RouteChannel } from "../../types";
import { API_VERSION } from "../../constants";
import {
  ProfessionAddController,
  ProfessionGetAllController,
  ProfessionGetController,
  ProfessionRemoveController,
  ProfessionUpdateController,
} from "../../controllers";

const router = express.Router();
router.get(
  `${API_VERSION}${RouteChannel.PROFESSION_GET}`,
  TokenHandler.verifyToken,
  ProfessionGetAllController,
);
router.get(
  `${API_VERSION}${RouteChannel.PROFESSION_GET_ALL}`,
  TokenHandler.verifyToken,
  ProfessionGetController,
);
router.post(
  `${API_VERSION}${RouteChannel.PROFESSION_NEW}`,
  TokenHandler.verifyToken,
  ProfessionAddController,
);
router.delete(
  `${API_VERSION}${RouteChannel.PROFESSION_REMOVE}`,
  TokenHandler.verifyToken,
  ProfessionRemoveController,
);
router.patch(
  `${API_VERSION}${RouteChannel.PROFESSION_UPDATE}`,
  TokenHandler.verifyToken,
  ProfessionUpdateController,
);

logging.log("----------------------------------------");
logging.log("---------PROFESSION CONTROLLER----------");
logging.log(RouteChannel.PROFESSION_GET);
logging.log(RouteChannel.PROFESSION_GET_ALL);
logging.log(RouteChannel.PROFESSION_NEW);
logging.log(RouteChannel.PROFESSION_NEW);
logging.log(RouteChannel.PROFESSION_UPDATE);
logging.log("----------------------------------------");

export default router;
