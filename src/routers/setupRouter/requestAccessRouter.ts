import express from "express";
import { TokenHandler } from "../../middleware";
import { RouteChannel } from "../../types";
import { API_VERSION } from "../../constants";
import {
  RequestAccessAddController,
  RequestAccessGetAllController,
  RequestAccessGetController,
  RequestAccessRemoveController,
  RequestAccessUpdateController,
} from "../../controllers";

const router = express.Router();
router.post(
  `${API_VERSION}${RouteChannel.REQUEST_ACCESS}`,
  RequestAccessAddController,
);
router.get(
  `${API_VERSION}${RouteChannel.REQUEST_ACCESS}`,
  TokenHandler.verifyToken,
  RequestAccessGetAllController,
);
router.get(
  `${API_VERSION}${RouteChannel.REQUEST_ACCESS_ID}`,
  TokenHandler.verifyToken,
  RequestAccessGetController,
);

router.delete(
  `${API_VERSION}${RouteChannel.REQUEST_ACCESS_ID}`,
  TokenHandler.verifyToken,
  RequestAccessRemoveController,
);
router.patch(
  `${API_VERSION}${RouteChannel.REQUEST_ACCESS_ID}`,
  TokenHandler.verifyToken,
  RequestAccessUpdateController,
);

logging.log("----------------------------------------");
logging.log("-------REQUEST ACCESS CONTROLLER--------");
logging.log(`GET ${RouteChannel.REQUEST_ACCESS} [get-all]`);
logging.log(`POST ${RouteChannel.REQUEST_ACCESS} [add]`);
logging.log(`GET ${RouteChannel.REQUEST_ACCESS_ID} [get]`);
logging.log(`DELETE ${RouteChannel.REQUEST_ACCESS_ID} [remove]`);
logging.log(`PATCH ${RouteChannel.REQUEST_ACCESS_ID} [update]`);
logging.log("----------------------------------------");

export default router;
