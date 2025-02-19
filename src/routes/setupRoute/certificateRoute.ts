import express from "express";
import { TokenHandler } from "../../middleware";
import { RouteChannel } from "../../types";
import { API_VERSION } from "../../constants";

const router = express.Router();
router.get(
  `${API_VERSION}${RouteChannel.CERTIFICATE_GET}`,
  TokenHandler.verifyToken,
);
router.get(
  `${API_VERSION}${RouteChannel.CERTIFICATE_GET_ALL}`,
  TokenHandler.verifyToken,
);
router.post(
  `${API_VERSION}${RouteChannel.CERTIFICATE_NEW}`,
  TokenHandler.verifyToken,
);
router.delete(
  `${API_VERSION}${RouteChannel.CERTIFICATE_REMOVE}`,
  TokenHandler.verifyToken,
);
router.patch(
  `${API_VERSION}${RouteChannel.CERTIFICATE_UPDATE}`,
  TokenHandler.verifyToken,
);

logging.log("----------------------------------------");
logging.log("--------CERTIFICATE CONTROLLER----------");
logging.log(RouteChannel.CERTIFICATE_GET);
logging.log(RouteChannel.CERTIFICATE_GET_ALL);
logging.log(RouteChannel.CERTIFICATE_NEW);
logging.log(RouteChannel.CERTIFICATE_REMOVE);
logging.log(RouteChannel.CERTIFICATE_UPDATE);
logging.log("----------------------------------------");

export default router;
