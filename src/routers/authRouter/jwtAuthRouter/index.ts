import { JWTAuth, Logout, JWTRefresh } from "../../../controllers";
import express from "express";
import { TokenHandler } from "../../../middleware";
import { RouteChannel } from "../../../types/route/routeChannel";
import { API_VERSION } from "../../../constants";

const router = express.Router();
router.get(`${API_VERSION}${RouteChannel.JWT_LOGOUT}`, Logout);
router.post(`${API_VERSION}${RouteChannel.JWT_LOGIN}`, JWTAuth);
router.get(
  `${API_VERSION}${RouteChannel.JWT_REFRESH}`,
  TokenHandler.verifyToken,
  JWTRefresh,
);

logging.log("----------------------------------------");
logging.log("----------JWT AUTH CONTROLLER----------");
logging.log(RouteChannel.JWT_LOGOUT);
logging.log(RouteChannel.JWT_LOGIN);
logging.log(RouteChannel.JWT_REFRESH);
logging.log("----------------------------------------");
export default router;
