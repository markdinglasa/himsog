import express from "express";
import { TokenHandler } from "../../middleware";
import { RouteChannel } from "../../types";
import { API_VERSION } from "../../constants";
import {
  AdminGetAllCount,
  ClientGetAllCount,
  NutritionistGetAllCount,
} from "../../controllers";

const router = express.Router();
router.get(
  `${API_VERSION}${RouteChannel.NUTRISTIONIST_COUNT}`,
  TokenHandler.verifyToken,
  NutritionistGetAllCount,
);
router.get(
  `${API_VERSION}${RouteChannel.CLIENT_COUNT}`,
  TokenHandler.verifyToken,
  ClientGetAllCount,
);
router.get(
  `${API_VERSION}${RouteChannel.ADMIN_COUNT}`,
  TokenHandler.verifyToken,
  AdminGetAllCount,
);

logging.log("----------------------------------------");
logging.log("----------COUNT CONTROLLER-----------");
logging.log(`GET ${RouteChannel.NUTRISTIONIST_COUNT} [get-all]`);
logging.log(`GET ${RouteChannel.CLIENT_COUNT} [get-all]`);
logging.log(`GET ${RouteChannel.ADMIN_COUNT} [get-all]`);
logging.log("----------------------------------------");

export default router;
