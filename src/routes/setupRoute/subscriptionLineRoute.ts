import express from "express";
import { TokenHandler } from "../../middleware";
import { RouteChannel } from "../../types";

const router = express.Router();
router.get(RouteChannel.SUBSCRIPTION_LINE_GET, TokenHandler.verifyToken);
router.get(RouteChannel.SUBSCRIPTION_LINE_GET_ALL, TokenHandler.verifyToken);
router.get(RouteChannel.SUBSCRIPTION_LINE_NEW, TokenHandler.verifyToken);
router.get(RouteChannel.SUBSCRIPTION_LINE_REMOVE, TokenHandler.verifyToken);
router.get(RouteChannel.SUBSCRIPTION_LINE_UPDATE, TokenHandler.verifyToken);

logging.log("----------------------------------------");
logging.log("-----SUBSCRIPTION LINE CONTROLLER-------");
logging.log(RouteChannel.SUBSCRIPTION_LINE_GET);
logging.log(RouteChannel.SUBSCRIPTION_LINE_GET_ALL);
logging.log(RouteChannel.SUBSCRIPTION_LINE_NEW);
logging.log(RouteChannel.SUBSCRIPTION_LINE_REMOVE);
logging.log(RouteChannel.SUBSCRIPTION_LINE_UPDATE);
logging.log("----------------------------------------");

export default router;
