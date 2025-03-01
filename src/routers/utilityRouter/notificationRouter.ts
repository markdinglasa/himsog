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
logging.log(`POST ${RouteChannel.NOTIFICATION} [add]`);
logging.log(`GET ${RouteChannel.NOTIFICATION_PARENT} [get-all]`);
logging.log(`GET ${RouteChannel.NOTIFICATION_ID} [get]`);
logging.log(`DELETE ${RouteChannel.NOTIFICATION_ID} [remove]`);
logging.log(`UPDATE ${RouteChannel.NOTIFICATION_ID} [update]`);
logging.log("----------------------------------------");

export default router;
