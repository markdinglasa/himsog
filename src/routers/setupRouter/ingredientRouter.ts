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
  `${API_VERSION}${RouteChannel.INGREDIENT_MEAL}`,
  TokenHandler.verifyToken,
  IngredientGetAllController,
);
router.post(
  `${API_VERSION}${RouteChannel.INGREDIENT}`,
  TokenHandler.verifyToken,
  IngredientAddController,
);
router.get(
  `${API_VERSION}${RouteChannel.INGREDIENT_ID}`,
  TokenHandler.verifyToken,
  IngredientGetController,
);
router.delete(
  `${API_VERSION}${RouteChannel.INGREDIENT_ID}`,
  TokenHandler.verifyToken,
  IngredientRemoveController,
);
router.patch(
  `${API_VERSION}${RouteChannel.INGREDIENT_ID}`,
  TokenHandler.verifyToken,
  IngredientUpdateController,
);

logging.log("----------------------------------------");
logging.log("---------INGREDIENT CONTROLLER----------");
logging.log(`GET ${RouteChannel.INGREDIENT_USER} [get-all]`);
logging.log(`POST ${RouteChannel.INGREDIENT} [add]`);
logging.log(`GET ${RouteChannel.INGREDIENT_ID} [get]`);
logging.log(`DELETE ${RouteChannel.INGREDIENT_ID} [remove]`);
logging.log(`PATCH ${RouteChannel.INGREDIENT_ID} [update]`);
logging.log("----------------------------------------");

export default router;
