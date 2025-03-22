import express from "express";
import { TokenHandler } from "../../middleware";
import { RouteChannel } from "../../types";
import { API_VERSION } from "../../constants";
import {
  ProfessionSpecialistAddController,
  ProfessionSpecialistGetAllController,
  ProfessionSpecialistGetController,
  ProfessionSpecialistRemoveController,
  ProfessionSpecialistUpdateController,
} from "../../controllers";

const router = express.Router();
router.post(
  `${API_VERSION}${RouteChannel.PROFESSION_SPECIALIST}`,
  TokenHandler.verifyToken,
  ProfessionSpecialistAddController,
);
router.get(
  `${API_VERSION}${RouteChannel.PROFESSION_SPECIALIST_ID}`,
  TokenHandler.verifyToken,
  ProfessionSpecialistGetController,
);
router.get(
  `${API_VERSION}${RouteChannel.PROFESSION_SPECIALIST_PARENT}`,
  TokenHandler.verifyToken,
  ProfessionSpecialistGetAllController,
);

router.delete(
  `${API_VERSION}${RouteChannel.PROFESSION_SPECIALIST_ID}`,
  TokenHandler.verifyToken,
  ProfessionSpecialistRemoveController,
);
router.patch(
  `${API_VERSION}${RouteChannel.PROFESSION_SPECIALIST_ID}`,
  TokenHandler.verifyToken,
  ProfessionSpecialistUpdateController,
);

logging.log("----------------------------------------");
logging.log("----PROFESSION SPECIALIST CONTROLLER----");
logging.log(`GET ${RouteChannel.PROFESSION_SPECIALIST_PARENT} [get-all]`);
logging.log(`POST ${RouteChannel.PROFESSION_SPECIALIST} [add]`);
logging.log(`GET ${RouteChannel.PROFESSION_SPECIALIST_ID} [get]`);
logging.log(`DELETE ${RouteChannel.PROFESSION_SPECIALIST_ID} [remove]`);
logging.log(`PATCH ${RouteChannel.PROFESSION_SPECIALIST_ID} [update]`);
logging.log("----------------------------------------");

export default router;
