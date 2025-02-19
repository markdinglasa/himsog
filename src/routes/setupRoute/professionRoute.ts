import express from "express";
import { TokenHandler } from "../../middleware";
import { RouteChannel } from "../../types";

const router = express.Router();
router.get(RouteChannel.PROFESSION_GET, TokenHandler.verifyToken);
router.get(RouteChannel.PROFESSION_GET_ALL, TokenHandler.verifyToken);
router.get(RouteChannel.PROFESSION_NEW, TokenHandler.verifyToken);
router.get(RouteChannel.PROFESSION_REMOVE, TokenHandler.verifyToken);
router.get(RouteChannel.PROFESSION_UPDATE, TokenHandler.verifyToken);

logging.log("----------------------------------------");
logging.log("---------PROFESSION CONTROLLER----------");
logging.log(RouteChannel.PROFESSION_GET);
logging.log(RouteChannel.PROFESSION_GET_ALL);
logging.log(RouteChannel.NUTRITION_FACT_NEW);
logging.log(RouteChannel.PROFESSION_NEW);
logging.log(RouteChannel.PROFESSION_UPDATE);
logging.log("----------------------------------------");

export default router;
