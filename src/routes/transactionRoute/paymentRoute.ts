import express from "express";
import { TokenHandler } from "../../middleware";
import { RouteChannel } from "../../types";

const router = express.Router();
router.get(RouteChannel.PAYMENT_GET, TokenHandler.verifyToken);
router.get(RouteChannel.PAYMENT_GET_ALL, TokenHandler.verifyToken);
router.get(RouteChannel.PAYMENT_NEW, TokenHandler.verifyToken);
router.get(RouteChannel.PAYMENT_REMOVE, TokenHandler.verifyToken);
router.get(RouteChannel.PAYMENT_UPDATE, TokenHandler.verifyToken);

logging.log("----------------------------------------");
logging.log("-----------PAYMENT CONTROLLER-----------");
logging.log(RouteChannel.PAYMENT_GET);
logging.log(RouteChannel.PAYMENT_GET_ALL);
logging.log(RouteChannel.PAYMENT_NEW);
logging.log(RouteChannel.PAYMENT_REMOVE);
logging.log(RouteChannel.PAYMENT_UPDATE);
logging.log("----------------------------------------");

export default router;
