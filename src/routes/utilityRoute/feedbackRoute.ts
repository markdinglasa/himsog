import express from "express";
import { TokenHandler } from "../../middleware";
import { RouteChannel } from "../../types";

const router = express.Router();
router.get(RouteChannel.FEEDBACK_GET, TokenHandler.verifyToken);
router.get(RouteChannel.FEEDBACK_GET_ALL, TokenHandler.verifyToken);
router.get(RouteChannel.FEEDBACK_NEW, TokenHandler.verifyToken);
router.get(RouteChannel.FEEDBACK_REMOVE, TokenHandler.verifyToken);
router.get(RouteChannel.FEEDBACK_UPDATE, TokenHandler.verifyToken);

logging.log("----------------------------------------");
logging.log("----------FEEDBACK CONTROLLER-----------");
logging.log(RouteChannel.FEEDBACK_GET);
logging.log(RouteChannel.FEEDBACK_GET_ALL);
logging.log(RouteChannel.FEEDBACK_NEW);
logging.log(RouteChannel.FEEDBACK_REMOVE);
logging.log(RouteChannel.FEEDBACK_UPDATE);
logging.log("----------------------------------------");

export default router;
