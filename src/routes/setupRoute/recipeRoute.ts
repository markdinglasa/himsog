import express from "express";
import { TokenHandler } from "../../middleware";
import { RouteChannel } from "../../types";

const router = express.Router();
router.get(RouteChannel.RECIPE_GET, TokenHandler.verifyToken);
router.get(RouteChannel.RECIPE_GET_ALL, TokenHandler.verifyToken);
router.get(RouteChannel.RECIPE_NEW, TokenHandler.verifyToken);
router.get(RouteChannel.RECIPE_REMOVE, TokenHandler.verifyToken);
router.get(RouteChannel.RECIPE_UPDATE, TokenHandler.verifyToken);

logging.log("----------------------------------------");
logging.log("-----------RECIPE CONTROLLER------------");
logging.log(RouteChannel.RECIPE_GET);
logging.log(RouteChannel.RECIPE_GET_ALL);
logging.log(RouteChannel.RECIPE_NEW);
logging.log(RouteChannel.RECIPE_REMOVE);
logging.log(RouteChannel.RECIPE_UPDATE);
logging.log("----------------------------------------");

export default router;
