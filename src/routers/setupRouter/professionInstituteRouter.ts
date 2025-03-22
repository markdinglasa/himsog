import express from "express";
import { TokenHandler } from "../../middleware";
import { RouteChannel } from "../../types";
import { API_VERSION } from "../../constants";
import {
  ProfessionInstituteAddController,
  ProfessionInstituteGetAllController,
  ProfessionInstituteGetController,
  ProfessionInstituteRemoveController,
  ProfessionInstituteUpdateController,
} from "../../controllers";

const router = express.Router();
router.post(
  `${API_VERSION}${RouteChannel.PROFESSION_INSTITUTE}`,
  TokenHandler.verifyToken,
  ProfessionInstituteAddController,
);
router.get(
  `${API_VERSION}${RouteChannel.PROFESSION_INSTITUTE_ID}`,
  TokenHandler.verifyToken,
  ProfessionInstituteGetController,
);
router.get(
  `${API_VERSION}${RouteChannel.PROFESSION_INSTITUTE_PARENT}`,
  TokenHandler.verifyToken,
  ProfessionInstituteGetAllController,
);
router.delete(
  `${API_VERSION}${RouteChannel.PROFESSION_INSTITUTE_ID}`,
  TokenHandler.verifyToken,
  ProfessionInstituteRemoveController,
);
router.patch(
  `${API_VERSION}${RouteChannel.PROFESSION_INSTITUTE_ID}`,
  TokenHandler.verifyToken,
  ProfessionInstituteUpdateController,
);

logging.log("----------------------------------------");
logging.log("----PROFESSION INSTITUTE CONTROLLER-----");
logging.log(`GET ${RouteChannel.PROFESSION_INSTITUTE_PARENT} [get-all]`);
logging.log(`POST ${RouteChannel.PROFESSION_INSTITUTE} [add]`);
logging.log(`GET ${RouteChannel.PROFESSION_INSTITUTE_ID} [get]`);
logging.log(`DELETE ${RouteChannel.PROFESSION_INSTITUTE_ID} [remove]`);
logging.log(`PATCH ${RouteChannel.PROFESSION_INSTITUTE_ID} [update]`);
logging.log("----------------------------------------");

export default router;
