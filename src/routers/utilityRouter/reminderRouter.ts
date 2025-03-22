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
logging.log(`POST ${RouteChannel.REMINDER} [add]`);
logging.log(`GET ${RouteChannel.REMINDER_PARENT} [get-all]`);
logging.log(`GET ${RouteChannel.REMINDER_ID} [get]`);
logging.log(`DELETE ${RouteChannel.REMINDER_ID} [remove]`);
logging.log(`UPDATE ${RouteChannel.REMINDER_ID} [update]`);
logging.log("----------------------------------------");

export default router;
