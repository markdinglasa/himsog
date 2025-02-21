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
  `${API_VERSION}${RouteChannel.NUTRITION_FACT_GET}`,
  TokenHandler.verifyToken,
  NutritionFactGetAllController,
);
router.get(
  `${API_VERSION}${RouteChannel.NUTRITION_FACT_GET_ALL}`,
  TokenHandler.verifyToken,
  NutritionFactGetController,
);
router.post(
  `${API_VERSION}${RouteChannel.NUTRITION_FACT_NEW}`,
  TokenHandler.verifyToken,
  NutritionFactAddController,
);
router.delete(
  `${API_VERSION}${RouteChannel.NUTRITION_FACT_REMOVE}`,
  TokenHandler.verifyToken,
  NutritionFactRemoveController,
);
router.patch(
  `${API_VERSION}${RouteChannel.NUTRITION_FACT_UPDATE}`,
  TokenHandler.verifyToken,
  NutritionFactUpdateController,
);

logging.log("----------------------------------------");
logging.log("-------NUTRITION FACT CONTROLLER--------");
logging.log(RouteChannel.NUTRITION_FACT_GET);
logging.log(RouteChannel.NUTRITION_FACT_GET_ALL);
logging.log(RouteChannel.NUTRITION_FACT_NEW);
logging.log(RouteChannel.NUTRITION_FACT_REMOVE);
logging.log(RouteChannel.NUTRITION_FACT_UPDATE);
logging.log("----------------------------------------");

export default router;
