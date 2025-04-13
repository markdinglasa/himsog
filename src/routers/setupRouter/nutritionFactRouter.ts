import express from "express";
import { TokenHandler } from "../../middleware";
import { RouteChannel } from "../../types";
import { API_VERSION } from "../../constants";
import {
  NutritionFactAddController,
  NutritionFactGetAllController,
  NutritionFactGetController,
  NutritionFactRemoveController,
  NutritionFactUpdateController,
} from "../../controllers";

const router = express.Router();
router.get(
  `${API_VERSION}${RouteChannel.NUTRITION_FACT_PARENT}`,
  TokenHandler.verifyToken,
  NutritionFactGetAllController,
);
router.get(
  `${API_VERSION}${RouteChannel.NUTRITION_FACT_ID}`,
  TokenHandler.verifyToken,
  NutritionFactGetController,
);
router.post(
  `${API_VERSION}${RouteChannel.NUTRITION_FACT}`,
  TokenHandler.verifyToken,
  NutritionFactAddController,
);
router.delete(
  `${API_VERSION}${RouteChannel.NUTRITION_FACT_ID}`,
  TokenHandler.verifyToken,
  NutritionFactRemoveController,
);
router.patch(
  `${API_VERSION}${RouteChannel.NUTRITION_FACT_ID}`,
  TokenHandler.verifyToken,
  NutritionFactUpdateController,
);

logging.log("----------------------------------------");
logging.log("-------NUTRITION FACT CONTROLLER--------");
logging.log(`GET ${RouteChannel.NUTRITION_FACT_PARENT} [get-all]`);
logging.log(`POST ${RouteChannel.NUTRITION_FACT} [add]`);
logging.log(`GET ${RouteChannel.NUTRITION_FACT_ID} [get]`);
logging.log(`DELETE ${RouteChannel.NUTRITION_FACT_ID} [remove]`);
logging.log(`PATCH ${RouteChannel.NUTRITION_FACT_ID} [update]`);
logging.log("----------------------------------------");

export default router;
