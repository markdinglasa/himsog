import express from "express";
import { TokenHandler } from "../../middleware";
import { RouteChannel } from "../../types";

const router = express.Router();
router.get(RouteChannel.REMINDER_GET, TokenHandler.verifyToken);
router.get(RouteChannel.REMINDER_GET_ALL, TokenHandler.verifyToken);
router.get(RouteChannel.REMINDER_NEW, TokenHandler.verifyToken);
router.get(RouteChannel.REMINDER_REMOVE, TokenHandler.verifyToken);
router.get(RouteChannel.REMINDER_UPDATE, TokenHandler.verifyToken);

logging.log("----------------------------------------");
logging.log("----------REMINDER CONTROLLER-----------");
logging.log(RouteChannel.REMINDER_GET);
logging.log(RouteChannel.REMINDER_GET_ALL);
logging.log(RouteChannel.REMINDER_NEW);
logging.log(RouteChannel.REMINDER_REMOVE);
logging.log(RouteChannel.REMINDER_UPDATE);
logging.log("----------------------------------------");

export default router;
