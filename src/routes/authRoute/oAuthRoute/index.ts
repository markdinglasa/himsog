import { GoogleAuth, JWTRefresh, GoogleRedirect } from "../../../controllers";
import express from "express";
import { TokenHandler } from "../../../middleware";
import { RouteChannel } from "../../../types";
import { API_VERSION } from "../../../constants";

const router = express.Router();
router.get(`${API_VERSION}${RouteChannel.GOOGLE_AUTH}`, GoogleAuth);
router.get(`${API_VERSION}${RouteChannel.GOOGLE_REDIRECT}`, GoogleRedirect);
router.get(
  `${API_VERSION}${RouteChannel.GOOGLE_REFRESH}`,
  TokenHandler.verifyGoogleToken,
  JWTRefresh,
);

logging.log("----------------------------------------");
logging.log("---------GOOGLE AUTH CONTROLLER---------");
logging.log(RouteChannel.JWT_LOGOUT);
logging.log(RouteChannel.JWT_LOGIN);
logging.log(RouteChannel.JWT_REFRESH);
logging.log("----------------------------------------");
export default router;
