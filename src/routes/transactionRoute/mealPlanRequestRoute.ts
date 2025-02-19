import express from "express";
import { TokenHandler } from "../../middleware";
import { RouteChannel } from "../../types";

const router = express.Router();
router.get(RouteChannel.MEAL_PLAN_GET, TokenHandler.verifyToken);
router.get(RouteChannel.MEAL_PLAN_GET_ALL, TokenHandler.verifyToken);
router.get(RouteChannel.MEAL_PLAN_NEW, TokenHandler.verifyToken);
router.get(RouteChannel.MEAL_PLAN_REMOVE, TokenHandler.verifyToken);
router.get(RouteChannel.MEAL_PLAN_UPDATE, TokenHandler.verifyToken);

logging.log("----------------------------------------");
logging.log("----------MEAL PLAN CONTROLLER----------");
logging.log(RouteChannel.MEAL_PLAN_GET);
logging.log(RouteChannel.MEAL_PLAN_GET_ALL);
logging.log(RouteChannel.MEAL_PLAN_NEW);
logging.log(RouteChannel.MEAL_PLAN_REMOVE);
logging.log(RouteChannel.MEAL_PLAN_UPDATE);
logging.log("----------------------------------------");

export default router;
