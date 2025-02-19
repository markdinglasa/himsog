import express from "express";
import { TokenHandler } from "../../middleware";
import { RouteChannel } from "../../types";

const router = express.Router();
router.get(RouteChannel.MEAL_GET, TokenHandler.verifyToken);
router.get(RouteChannel.MEAL_GET_ALL, TokenHandler.verifyToken);
router.get(RouteChannel.MEAL_NEW, TokenHandler.verifyToken);
router.get(RouteChannel.MEAL_REMOVE, TokenHandler.verifyToken);
router.get(RouteChannel.MEAL_UPDATE, TokenHandler.verifyToken);

logging.log("----------------------------------------");
logging.log("------------MEAL CONTROLLER-------------");
logging.log(RouteChannel.MEAL_GET);
logging.log(RouteChannel.MEAL_GET_ALL);
logging.log(RouteChannel.MEAL_NEW);
logging.log(RouteChannel.MEAL_REMOVE);
logging.log(RouteChannel.MEAL_UPDATE);
logging.log("----------------------------------------");

export default router;
