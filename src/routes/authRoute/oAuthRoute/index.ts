import {
  GoogleAuth,
  Logout,
  JWTRefresh,
  GoogleRedirect,
} from "../../../controllers";
import express from "express";
import { TokenHandler } from "../../../middleware";
import { RouteChannel } from "../../../types";

const router = express.Router();
logging.log("----------------------------------------");
logging.log("----------GOOGLE AUTH CONTROLLER---------------");
router.get(RouteChannel.GOOGLE_AUTH, GoogleAuth);
router.post(RouteChannel.GOOGLE_REDIRECT, GoogleRedirect);
router.get(
  RouteChannel.GOOGLE_REFRESH,
  TokenHandler.verifyGoogleToken,
  JWTRefresh,
);
logging.log("----------------------------------------");

export default router;
