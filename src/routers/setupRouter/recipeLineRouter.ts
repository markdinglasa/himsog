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
  `${API_VERSION}${RouteChannel.RECIPE_LINE_PARENT}`,
  TokenHandler.verifyToken,
  RecipeLineGetController,
);
router.post(
  `${API_VERSION}${RouteChannel.RECIPE_LINE}`,
  TokenHandler.verifyToken,
  RecipeLineAddController,
);
router.get(
  `${API_VERSION}${RouteChannel.RECIPE_LINE_ID}`,
  TokenHandler.verifyToken,
  RecipeLineGetAllController,
);
router.delete(
  `${API_VERSION}${RouteChannel.RECIPE_LINE_ID}`,
  TokenHandler.verifyToken,
  RecipeLineRemoveController,
);
router.patch(
  `${API_VERSION}${RouteChannel.RECIPE_LINE_ID}`,
  TokenHandler.verifyToken,
  RecipeLineUpdateController,
);

logging.log("----------------------------------------");
logging.log("---------RECIPE LINE CONTROLLER---------");
logging.log(`GET ${RouteChannel.RECIPE_LINE_PARENT} [get-all]`);
logging.log(`POST ${RouteChannel.RECIPE_LINE} [add]`);
logging.log(`GET ${RouteChannel.RECIPE_LINE_ID} [get]`);
logging.log(`DELETE ${RouteChannel.RECIPE_LINE_ID} [remove]`);
logging.log(`PATCH ${RouteChannel.RECIPE_LINE_ID} [update]`);
logging.log("----------------------------------------");

export default router;
