import express from "express";
import { TokenHandler } from "../../middleware";
import { RouteChannel } from "../../types";

const router = express.Router();
router.get(RouteChannel.APPOINTMENT_GET, TokenHandler.verifyToken);
router.get(RouteChannel.APPOINTMENT_GET_ALL, TokenHandler.verifyToken);
router.get(RouteChannel.APPOINTMENT_NEW, TokenHandler.verifyToken);
router.get(RouteChannel.APPOINTMENT_REMOVE, TokenHandler.verifyToken);
router.get(RouteChannel.APPOINTMENT_UPDATE, TokenHandler.verifyToken);

logging.log("----------------------------------------");
logging.log("--------APPOINTMENT CONTROLLER----------");
logging.log(RouteChannel.NOTIFICATION_GET);
logging.log(RouteChannel.APPOINTMENT_GET_ALL);
logging.log(RouteChannel.APPOINTMENT_NEW);
logging.log(RouteChannel.APPOINTMENT_REMOVE);
logging.log(RouteChannel.APPOINTMENT_UPDATE);
logging.log("----------------------------------------");

export default router;
