import { JWTAuth, Logout, JWTRefresh } from "../../../controllers";
import express from "express";
import { TokenHandler } from "../../../middleware";
import { RouteChannel } from "../../../types/route/routeChannel";

const router = express.Router();
logging.log("----------------------------------------");
logging.log("----------JWT AUTH CONTROLLER---------------");
router.get(RouteChannel.JWT_LOGOUT, TokenHandler.verifyToken, Logout);
router.post(RouteChannel.JWT_LOGIN, JWTAuth);
router.get(RouteChannel.JWT_REFRESH, TokenHandler.verifyToken, JWTRefresh);
logging.log("----------------------------------------");

export default router;
