import express from "express";
import { TokenHandler } from "../../middleware";
import { RouteChannel } from "../../types";
import { API_VERSION } from "../../constants";
import {
  UnitAddController,
  UnitGetAllController,
  UnitGetController,
  UnitRemoveController,
  UnitUpdateController,
} from "../../controllers";

const router = express.Router();

router.get(
  `${API_VERSION}${RouteChannel.UNIT}`,
  TokenHandler.verifyToken,
  UnitGetAllController,
);
router.post(
  `${API_VERSION}${RouteChannel.UNIT}`,
  TokenHandler.verifyToken,
  UnitAddController,
);
router.get(
  `${API_VERSION}${RouteChannel.UNIT_ID}`,
  TokenHandler.verifyToken,
  UnitGetController,
);
router.delete(
  `${API_VERSION}${RouteChannel.UNIT_ID}`,
  TokenHandler.verifyToken,
  UnitRemoveController,
);
router.patch(
  `${API_VERSION}${RouteChannel.UNIT_ID}`,
  TokenHandler.verifyToken,
  UnitUpdateController,
);

logging.log("----------------------------------------");
logging.log("------------UNIT CONTROLLER-------------");
logging.log(`GET ${RouteChannel.UNIT_ID} [get]`);
logging.log(`POST ${RouteChannel.UNIT} [add]`);
logging.log(`GET ${RouteChannel.UNIT} [get-all]`);
logging.log(`DELETE ${RouteChannel.UNIT_ID} [remove]`);
logging.log(`UPDATE ${RouteChannel.UNIT_ID} [update]`);
logging.log("----------------------------------------");

export default router;
