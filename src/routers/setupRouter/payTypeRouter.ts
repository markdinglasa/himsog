import express from "express";
import { TokenHandler } from "../../middleware";
import { RouteChannel } from "../../types";
import { API_VERSION } from "../../constants";
import {
  PayTypeAddController,
  PayTypeGetAllController,
  PayTypeGetController,
  PayTypeRemoveController,
  PayTypeUpdateController,
} from "../../controllers";

const router = express.Router();
router.get(
  `${API_VERSION}${RouteChannel.PAY_TYPE_PARENT}`,
  TokenHandler.verifyToken,
  PayTypeGetAllController,
);

router.post(
  `${API_VERSION}${RouteChannel.PAY_TYPE}`,
  TokenHandler.verifyToken,
  PayTypeAddController,
);
router.get(
  `${API_VERSION}${RouteChannel.PAY_TYPE_ID}`,
  TokenHandler.verifyToken,
  PayTypeGetController,
);
router.delete(
  `${API_VERSION}${RouteChannel.PAY_TYPE_ID}`,
  TokenHandler.verifyToken,
  PayTypeRemoveController,
);
router.patch(
  `${API_VERSION}${RouteChannel.PAY_TYPE_ID}`,
  TokenHandler.verifyToken,
  PayTypeUpdateController,
);

logging.log("----------------------------------------");
logging.log("----------PAY TYPE CONTROLLER-----------");
logging.log(`GET ${RouteChannel.PAY_TYPE_PARENT} [get-all]`);
logging.log(`POST ${RouteChannel.PAY_TYPE} [add]`);
logging.log(`GET ${RouteChannel.PAY_TYPE_ID} [get]`);
logging.log(`DELETE ${RouteChannel.PAY_TYPE_ID} [remove]`);
logging.log(`PATCH ${RouteChannel.PAY_TYPE_ID} [update]`);
logging.log("----------------------------------------");

export default router;
