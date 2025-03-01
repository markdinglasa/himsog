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
  `${API_VERSION}${RouteChannel.PROFESSION}`,
  TokenHandler.verifyToken,
  ProfessionGetController,
);
router.post(
  `${API_VERSION}${RouteChannel.PROFESSION}`,
  TokenHandler.verifyToken,
  ProfessionAddController,
);
router.get(
  `${API_VERSION}${RouteChannel.PROFESSION_ID}`,
  TokenHandler.verifyToken,
  ProfessionGetAllController,
);
router.delete(
  `${API_VERSION}${RouteChannel.PROFESSION_ID}`,
  TokenHandler.verifyToken,
  ProfessionRemoveController,
);
router.patch(
  `${API_VERSION}${RouteChannel.PROFESSION_ID}`,
  TokenHandler.verifyToken,
  ProfessionUpdateController,
);

logging.log("----------------------------------------");
logging.log("---------PROFESSION CONTROLLER----------");
logging.log(`GET ${RouteChannel.PROFESSION} [get-all]`);
logging.log(`POST ${RouteChannel.PROFESSION} [add]`);
logging.log(`GET ${RouteChannel.PROFESSION_ID} [get]`);
logging.log(`DELETE ${RouteChannel.PROFESSION_ID} [remove]`);
logging.log(`PATCH ${RouteChannel.PROFESSION_ID} [update]`);
logging.log("----------------------------------------");

export default router;
