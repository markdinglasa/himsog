import express from "express";
import { TokenHandler } from "../../middleware";
import { RouteChannel } from "../../types";
import { API_VERSION } from "../../constants";
import {
  RecipeAddController,
  RecipeGetAllController,
  RecipeGetController,
  RecipeRemoveController,
  RecipeUpdateController,
} from "../../controllers";

const router = express.Router();
router.get(
  `${API_VERSION}${RouteChannel.RECIPE_LINE_GET}`,
  TokenHandler.verifyToken,
  RecipeGetAllController,
);
router.get(
  `${API_VERSION}${RouteChannel.RECIPE_LINE_GET_ALL}`,
  TokenHandler.verifyToken,
  RecipeGetController,
);
router.post(
  `${API_VERSION}${RouteChannel.RECIPE_LINE_NEW}`,
  TokenHandler.verifyToken,
  RecipeAddController,
);
router.delete(
  `${API_VERSION}${RouteChannel.RECIPE_LINE_REMOVE}`,
  TokenHandler.verifyToken,
  RecipeRemoveController,
);
router.patch(
  `${API_VERSION}${RouteChannel.RECIPE_LINE_UPDATE}`,
  TokenHandler.verifyToken,
  RecipeUpdateController,
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
