import express from "express";
import { TokenHandler } from "../../middleware";
import { RouteChannel } from "../../types";

const router = express.Router();
router.get(RouteChannel.NOTIFICATION_GET, TokenHandler.verifyToken);
router.get(RouteChannel.NOTIFICATION_GET_ALL, TokenHandler.verifyToken);
router.get(RouteChannel.NOTIFICATION_NEW, TokenHandler.verifyToken);
router.get(RouteChannel.NOTIFICATION_REMOVE, TokenHandler.verifyToken);
router.get(RouteChannel.NOTIFICATION_UPDATE, TokenHandler.verifyToken);

logging.log("----------------------------------------");
logging.log("----------NOTIFICATION CONTROLLER-----------");
logging.log(RouteChannel.NOTIFICATION_GET);
logging.log(RouteChannel.NOTIFICATION_GET_ALL);
logging.log(RouteChannel.NOTIFICATION_NEW);
logging.log(RouteChannel.NOTIFICATION_REMOVE);
logging.log(RouteChannel.NOTIFICATION_UPDATE);
logging.log("----------------------------------------");

export default router;
