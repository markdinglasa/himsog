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
router.get(
  `${API_VERSION}${RouteChannel.REQUEST_ACCESS_GET}`,
  TokenHandler.verifyToken,
  RequestAccessGetController,
);
router.get(
  `${API_VERSION}${RouteChannel.REQUEST_ACCESS_GET_ALL}`,
  TokenHandler.verifyToken,
  RequestAccessGetAllController,
);
router.post(
  `${API_VERSION}${RouteChannel.REQUEST_ACCESS_NEW}`,
  TokenHandler.verifyToken,
  RequestAccessAddController,
);
router.delete(
  `${API_VERSION}${RouteChannel.REQUEST_ACCESS_REMOVE}`,
  TokenHandler.verifyToken,
  RequestAccessRemoveController,
);
router.patch(
  `${API_VERSION}${RouteChannel.REQUEST_ACCESS_UPDATE}`,
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
