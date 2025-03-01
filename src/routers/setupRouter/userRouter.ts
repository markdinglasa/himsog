import {
  UserAddController,
  UserGetAllController,
  UserGetController,
  UserRegisterController,
  UserRemoveController,
  UserUpdateController,
} from "../../controllers";
import express from "express";
import { TokenHandler } from "../../middleware";
import { RouteChannel } from "../../types";
import { API_VERSION } from "../../constants";

const router = express.Router();

router.get(
  `${API_VERSION}${RouteChannel.USER}`,
  TokenHandler.verifyToken,
  UserGetAllController,
);
router.post(
  `${API_VERSION}${RouteChannel.USER_REGISTER}`,
  UserRegisterController,
);
router.post(
  `${API_VERSION}${RouteChannel.USER}`,
  TokenHandler.verifyToken,
  UserAddController,
);
router.get(
  `${API_VERSION}${RouteChannel.USER_ID}`,
  TokenHandler.verifyToken,
  UserGetController,
);
router.delete(
  `${API_VERSION}${RouteChannel.USER_ID}`,
  TokenHandler.verifyToken,
  UserRemoveController,
);
router.patch(
  `${API_VERSION}${RouteChannel.USER_ID}`,
  TokenHandler.verifyToken,
  UserUpdateController,
);

logging.log("----------------------------------------");
logging.log("-------------USER CONTROLLER------------");
logging.log(`GET ${RouteChannel.USER} [get-all]`);
logging.log(`POST ${RouteChannel.USER} [add]`);
logging.log(`POST ${RouteChannel.USER_REGISTER} [register]`);
logging.log(`GET ${RouteChannel.USER_ID} [get]`);
logging.log(`DELETE ${RouteChannel.USER_ID} [remove]`);
logging.log(`PATCH ${RouteChannel.USER_ID} [update]`);
logging.log("----------------------------------------");

export default router;
