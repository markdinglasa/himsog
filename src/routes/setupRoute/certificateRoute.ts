import express from "express";
import { TokenHandler } from "../../middleware";
import { RouteChannel } from "../../types";

const router = express.Router();
router.get(RouteChannel.CERTIFICATE_GET, TokenHandler.verifyToken);
router.get(RouteChannel.CERTIFICATE_GET_ALL, TokenHandler.verifyToken);
router.get(RouteChannel.CERTIFICATE_NEW, TokenHandler.verifyToken);
router.get(RouteChannel.CERTIFICATE_REMOVE, TokenHandler.verifyToken);
router.get(RouteChannel.CERTIFICATE_UPDATE, TokenHandler.verifyToken);

logging.log("----------------------------------------");
logging.log("--------CERTIFICATE CONTROLLER----------");
logging.log(RouteChannel.NOTIFICATION_GET);
logging.log(RouteChannel.CERTIFICATE_GET_ALL);
logging.log(RouteChannel.CERTIFICATE_NEW);
logging.log(RouteChannel.CERTIFICATE_REMOVE);
logging.log(RouteChannel.CERTIFICATE_UPDATE);
logging.log("----------------------------------------");

export default router;
