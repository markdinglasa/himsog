import express from "express";
import { TokenHandler } from "../../middleware";
import { RouteChannel } from "../../types";
import { API_VERSION } from "../../constants";
import {
  RecipeLineAddController,
  RecipeLineGetAllController,
  RecipeLineGetController,
  RecipeLineRemoveController,
  RecipeLineUpdateController,
} from "../../controllers";

const router = express.Router();
router.get(
  `${API_VERSION}${RouteChannel.RECIPE_LINE_GET}`,
  TokenHandler.verifyToken,
  RecipeLineGetAllController,
);
router.get(
  `${API_VERSION}${RouteChannel.RECIPE_LINE_GET_ALL}`,
  TokenHandler.verifyToken,
  RecipeLineGetController,
);
router.post(
  `${API_VERSION}${RouteChannel.RECIPE_LINE_NEW}`,
  TokenHandler.verifyToken,
  RecipeLineAddController,
);
router.delete(
  `${API_VERSION}${RouteChannel.RECIPE_LINE_REMOVE}`,
  TokenHandler.verifyToken,
  RecipeLineRemoveController,
);
router.patch(
  `${API_VERSION}${RouteChannel.RECIPE_LINE_UPDATE}`,
  TokenHandler.verifyToken,
  RecipeLineUpdateController,
);

logging.log("----------------------------------------");
logging.log("---------RECIPE LINE CONTROLLER---------");
logging.log(RouteChannel.RECIPE_LINE_GET);
logging.log(RouteChannel.RECIPE_LINE_GET_ALL);
logging.log(RouteChannel.RECIPE_LINE_NEW);
logging.log(RouteChannel.RECIPE_LINE_REMOVE);
logging.log(RouteChannel.RECIPE_LINE_UPDATE);
logging.log("----------------------------------------");

export default router;
