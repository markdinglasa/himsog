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
  `${API_VERSION}${RouteChannel.USER_GET}`,
  TokenHandler.verifyToken,
  UserGetController,
);
router.get(
  `${API_VERSION}${RouteChannel.USER_GET_ALL}`,
  TokenHandler.verifyToken,
  UserGetAllController,
);

router.post(
  `${API_VERSION}${RouteChannel.USER_REGISTER}`,
  UserRegisterController,
);
router.post(
  `${API_VERSION}${RouteChannel.USER_NEW}`,
  TokenHandler.verifyToken,
  UserAddController,
);
router.delete(
  `${API_VERSION}${RouteChannel.USER_REMOVE}`,
  TokenHandler.verifyToken,
  UserRemoveController,
);
router.patch(
  `${API_VERSION}${RouteChannel.USER_UPDATE}`,
  TokenHandler.verifyToken,
  UserUpdateController,
);

logging.log("----------------------------------------");
logging.log("-------------USER CONTROLLER------------");
logging.log(RouteChannel.USER_GET);
logging.log(RouteChannel.USER_GET_ALL);
logging.log(RouteChannel.USER_REGISTER);
logging.log(RouteChannel.USER_NEW);
logging.log(RouteChannel.USER_REMOVE);
logging.log(RouteChannel.USER_UPDATE);
logging.log("----------------------------------------");

export default router;
