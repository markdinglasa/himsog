import express from "express";
import { TokenHandler } from "../../middleware";
import { RouteChannel } from "../../types";

const router = express.Router();
router.get(RouteChannel.HEALTH_GET, TokenHandler.verifyToken);
router.get(RouteChannel.HEALTH_GET_ALL, TokenHandler.verifyToken);
router.get(RouteChannel.HEALTH_NEW, TokenHandler.verifyToken);
router.get(RouteChannel.HEALTH_REMOVE, TokenHandler.verifyToken);
router.get(RouteChannel.HEALTH_UPDATE, TokenHandler.verifyToken);

logging.log("----------------------------------------");
logging.log("------------HEALTH CONTROLLER-----------");
logging.log(RouteChannel.HEALTH_GET);
logging.log(RouteChannel.HEALTH_GET_ALL);
logging.log(RouteChannel.HEALTH_NEW);
logging.log(RouteChannel.HEALTH_REMOVE);
logging.log(RouteChannel.HEALTH_UPDATE);
logging.log("----------------------------------------");

export default router;
