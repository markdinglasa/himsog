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
  `${API_VERSION}${RouteChannel.UNIT_GET_ALL}`,
  TokenHandler.verifyToken,
  UnitGetAllController,
);
router.get(
  `${API_VERSION}${RouteChannel.UNIT_GET}`,
  TokenHandler.verifyToken,
  UnitGetController,
);
router.post(
  `${API_VERSION}${RouteChannel.UNIT_NEW}`,
  TokenHandler.verifyToken,
  UnitAddController,
);
router.delete(
  `${API_VERSION}${RouteChannel.UNIT_REMOVE}`,
  TokenHandler.verifyToken,
  UnitRemoveController,
);
router.patch(
  `${API_VERSION}${RouteChannel.UNIT_UPDATE}`,
  TokenHandler.verifyToken,
  UnitUpdateController,
);

logging.log("----------------------------------------");
logging.log("------------UNIT CONTROLLER-------------");
logging.log(RouteChannel.UNIT_GET);
logging.log(RouteChannel.UNIT_GET_ALL);
logging.log(RouteChannel.UNIT_NEW);
logging.log(RouteChannel.UNIT_REMOVE);
logging.log(RouteChannel.UNIT_UPDATE);
logging.log("----------------------------------------");

export default router;
