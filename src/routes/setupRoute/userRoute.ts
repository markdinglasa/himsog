import {
  UserAddController,
  UserGetAllController,
  UserGetController,
  UserRemoveController,
  UserUpdateController,
} from "../../controllers";
import express from "express";
import { TokenHandler } from "../../middleware";
import { RouteChannel } from "../../types";

const router = express.Router();
router.get(RouteChannel.USER_REGISTER, UserAddController);
router.post(RouteChannel.USER_NEW, TokenHandler.verifyToken, UserAddController);
router.get(
  RouteChannel.USER_GET_ALL,
  TokenHandler.verifyToken,
  UserGetAllController,
);
router.get(RouteChannel.USER_GET, TokenHandler.verifyToken, UserGetController);
router.get(
  RouteChannel.USER_REMOVE,
  TokenHandler.verifyToken,
  UserRemoveController,
);
router.get(
  RouteChannel.USER_UPDATE,
  TokenHandler.verifyToken,
  UserUpdateController,
);

logging.log("----------------------------------------");
logging.log("-------------USER CONTROLLER------------");
logging.log(RouteChannel.USER_GET);
logging.log(RouteChannel.USER_GET_ALL);
logging.log(RouteChannel.USER_NEW);
logging.log(RouteChannel.USER_REMOVE);
logging.log(RouteChannel.USER_UPDATE);
logging.log("----------------------------------------");

export default router;
