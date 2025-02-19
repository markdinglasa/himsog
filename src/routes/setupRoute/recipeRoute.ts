import express from "express";
import { TokenHandler } from "../../middleware";
import { RouteChannel } from "../../types";
import { API_VERSION } from "../../constants";

const router = express.Router();
router.get(
  `${API_VERSION}${RouteChannel.RECIPE_GET}`,
  TokenHandler.verifyToken,
);
router.get(
  `${API_VERSION}${RouteChannel.RECIPE_GET_ALL}`,
  TokenHandler.verifyToken,
);
router.post(
  `${API_VERSION}${RouteChannel.RECIPE_NEW}`,
  TokenHandler.verifyToken,
);
router.delete(
  `${API_VERSION}${RouteChannel.RECIPE_REMOVE}`,
  TokenHandler.verifyToken,
);
router.patch(
  `${API_VERSION}${RouteChannel.RECIPE_UPDATE}`,
  TokenHandler.verifyToken,
);

logging.log("----------------------------------------");
logging.log("-----------RECIPE CONTROLLER------------");
logging.log(RouteChannel.RECIPE_GET);
logging.log(RouteChannel.RECIPE_GET_ALL);
logging.log(RouteChannel.RECIPE_NEW);
logging.log(RouteChannel.RECIPE_REMOVE);
logging.log(RouteChannel.RECIPE_UPDATE);
logging.log("----------------------------------------");

export default router;
