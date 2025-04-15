import express from "express";
import { TokenHandler } from "../../middleware";
import { RouteChannel } from "../../types";
import { API_VERSION } from "../../constants";
import {
  MedicalGetController,
  MedicalRemoveController,
  MedicalUpdateController,
  MedicalAddController,
} from "../../controllers";

const router = express.Router();
router.get(
  `${API_VERSION}${RouteChannel.MEDICAL}`,
  TokenHandler.verifyToken,
  MedicalAddController,
);

router.get(
  `${API_VERSION}${RouteChannel.MEDICAL_ID}`,
  TokenHandler.verifyToken,
  MedicalGetController,
);
router.delete(
  `${API_VERSION}${RouteChannel.MEDICAL_ID}`,
  TokenHandler.verifyToken,
  MedicalRemoveController,
);
router.patch(
  `${API_VERSION}${RouteChannel.MEDICAL_ID}`,
  TokenHandler.verifyToken,
  MedicalUpdateController,
);

logging.log("----------------------------------------");
logging.log("------------MEAL CONTROLLER-------------");
logging.log(`GET ${RouteChannel.MEAL} [get-all]`);
logging.log(`POST ${RouteChannel.MEAL} [add]`);
logging.log(`GET ${RouteChannel.MEAL_ID} [get]`);
logging.log(`DELETE ${RouteChannel.MEAL_ID} [remove]`);
logging.log(`PATCH ${RouteChannel.MEAL_ID} [update]`);
logging.log("----------------------------------------");

export default router;
