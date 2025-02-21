import express from "express";
import { TokenHandler } from "../../middleware";
import { RouteChannel } from "../../types";
import { API_VERSION } from "../../constants";
import {
  IngredientAddController,
  IngredientGetAllController,
  IngredientGetController,
  IngredientRemoveController,
  IngredientUpdateController,
} from "../../controllers";

const router = express.Router();
router.get(
  `${API_VERSION}${RouteChannel.INGREDIENT_GET}`,
  TokenHandler.verifyToken,
  IngredientGetController,
);
router.get(
  `${API_VERSION}${RouteChannel.INGREDIENT_GET_ALL}`,
  TokenHandler.verifyToken,
  IngredientGetAllController,
);
router.post(
  `${API_VERSION}${RouteChannel.INGREDIENT_NEW}`,
  TokenHandler.verifyToken,
  IngredientAddController,
);
router.delete(
  `${API_VERSION}${RouteChannel.INGREDIENT_REMOVE}`,
  TokenHandler.verifyToken,
  IngredientRemoveController,
);
router.patch(
  `${API_VERSION}${RouteChannel.INGREDIENT_UPDATE}`,
  TokenHandler.verifyToken,
  IngredientUpdateController,
);

logging.log("----------------------------------------");
logging.log("---------INGREDIENT CONTROLLER----------");
logging.log(RouteChannel.INGREDIENT_GET);
logging.log(RouteChannel.INGREDIENT_GET_ALL);
logging.log(RouteChannel.INGREDIENT_NEW);
logging.log(RouteChannel.INGREDIENT_REMOVE);
logging.log(RouteChannel.INGREDIENT_UPDATE);
logging.log("----------------------------------------");

export default router;
