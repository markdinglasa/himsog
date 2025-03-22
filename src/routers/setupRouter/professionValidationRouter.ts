import express from "express";
import { TokenHandler } from "../../middleware";
import { RouteChannel } from "../../types";
import { API_VERSION } from "../../constants";
import {
  ProfessionValidationAdd,
  ProfessionValidationGet,
  ProfessionValidationGetByUser,
  ProfessionValidationRemoved,
  ProfessionValidationUpdate,
} from "../../controllers";

const router = express.Router();

router.post(
  `${API_VERSION}${RouteChannel.PROFESSION_VALIDITION}`,
  TokenHandler.verifyToken,
  ProfessionValidationAdd,
);
router.get(
  `${API_VERSION}${RouteChannel.PROFESSION_VALIDITION_ID}`,
  TokenHandler.verifyToken,
  ProfessionValidationGet,
);
router.get(
  `${API_VERSION}${RouteChannel.PROFESSION_VALIDITION_USER}`,
  TokenHandler.verifyToken,
  ProfessionValidationGetByUser,
);

router.delete(
  `${API_VERSION}${RouteChannel.PROFESSION_VALIDITION_ID}`,
  TokenHandler.verifyToken,
  ProfessionValidationRemoved,
);
router.patch(
  `${API_VERSION}${RouteChannel.PROFESSION_VALIDITION_ID}`,
  TokenHandler.verifyToken,
  ProfessionValidationUpdate,
);

logging.log("----------------------------------------");
logging.log("----PROFESSION VALIDATION CONTROLLER----");
logging.log(`POST ${RouteChannel.PROFESSION_VALIDITION} [add]`);
logging.log(`GET ${RouteChannel.PROFESSION_VALIDITION_ID} [get]`);
logging.log(`DELETE ${RouteChannel.PROFESSION_VALIDITION_ID} [remove]`);
logging.log(`PATCH ${RouteChannel.PROFESSION_VALIDITION_ID} [update]`);
logging.log("----------------------------------------");

export default router;
