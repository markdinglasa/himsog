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
  `${API_VERSION}${RouteChannel.RECIPE}`,
  TokenHandler.verifyToken,
  RecipeGetController,
);
router.post(
  `${API_VERSION}${RouteChannel.RECIPE}`,
  TokenHandler.verifyToken,
  RecipeAddController,
);
router.get(
  `${API_VERSION}${RouteChannel.RECIPE_ID}`,
  TokenHandler.verifyToken,
  RecipeGetAllController,
);
router.delete(
  `${API_VERSION}${RouteChannel.RECIPE_ID}`,
  TokenHandler.verifyToken,
  RecipeRemoveController,
);
router.patch(
  `${API_VERSION}${RouteChannel.RECIPE_ID}`,
  TokenHandler.verifyToken,
  RecipeUpdateController,
);

logging.log("----------------------------------------");
logging.log("-----------RECIPE CONTROLLER------------");
logging.log(`GET ${RouteChannel.RECIPE} [get-all]`);
logging.log(`POST ${RouteChannel.RECIPE} [add]`);
logging.log(`GET ${RouteChannel.RECIPE_ID} [get]`);
logging.log(`DELETE ${RouteChannel.RECIPE_ID} [remove]`);
logging.log(`PATCH ${RouteChannel.RECIPE_ID} [update]`);
logging.log("----------------------------------------");

export default router;
