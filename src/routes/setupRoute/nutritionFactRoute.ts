import express from "express";
import { TokenHandler } from "../../middleware";
import { RouteChannel } from "../../types";

const router = express.Router();
router.get(RouteChannel.NUTRITION_FACT_GET, TokenHandler.verifyToken);
router.get(RouteChannel.NUTRITION_FACT_GET_ALL, TokenHandler.verifyToken);
router.get(RouteChannel.NUTRITION_FACT_NEW, TokenHandler.verifyToken);
router.get(RouteChannel.NUTRITION_FACT_REMOVE, TokenHandler.verifyToken);
router.get(RouteChannel.NUTRITION_FACT_UPDATE, TokenHandler.verifyToken);

logging.log("----------------------------------------");
logging.log("-------NUTRITION FACT CONTROLLER--------");
logging.log(RouteChannel.NUTRITION_FACT_GET);
logging.log(RouteChannel.NUTRITION_FACT_GET_ALL);
logging.log(RouteChannel.NUTRITION_FACT_NEW);
logging.log(RouteChannel.NUTRITION_FACT_REMOVE);
logging.log(RouteChannel.NUTRITION_FACT_UPDATE);
logging.log("----------------------------------------");

export default router;
