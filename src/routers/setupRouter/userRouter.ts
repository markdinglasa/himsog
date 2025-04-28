import {
  UserAddController,
  UserGetAllController,
  UserGetByRoleController,
  UserGetController,
  UserHasTransactionController,
  UserRegisterController,
  UserRemoveController,
  UserSuspendController,
  UserUpdateController,
  UserUpdateEmailController,
  UserUpdatePasswordController,
  UserUpdatePhotoController,
} from "../../controllers";
import express from "express";
import { TokenHandler } from "../../middleware";
import { RouteChannel } from "../../types";
import { API_VERSION } from "../../constants";

const router = express.Router();
router.get(
  `${API_VERSION}${RouteChannel.USER_TRANSCTION}`,
  TokenHandler.verifyToken,
  UserHasTransactionController,
);
router.get(
  `${API_VERSION}${RouteChannel.USERS}`,
  TokenHandler.verifyToken,
  UserGetByRoleController,
);
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
router.patch(
  `${API_VERSION}${RouteChannel.USER_PHOTO}`,
  TokenHandler.verifyToken,
  UserUpdatePhotoController,
);
router.patch(
  `${API_VERSION}${RouteChannel.USER_EMAIL}`,
  TokenHandler.verifyToken,
  UserUpdateEmailController,
);
router.patch(
  `${API_VERSION}${RouteChannel.USER_PASSWORD}`,
  TokenHandler.verifyToken,
  UserUpdatePasswordController,
);
router.patch(
  `${API_VERSION}${RouteChannel.USER_SUSPEND}`,
  TokenHandler.verifyToken,
  UserSuspendController,
);
logging.log("----------------------------------------");
logging.log("-------------USER CONTROLLER------------");
logging.log(`GET ${RouteChannel.USER} [get-all]`);
logging.log(`POST ${RouteChannel.USER} [add]`);
logging.log(`POST ${RouteChannel.USER_REGISTER} [register]`);
logging.log(`GET ${RouteChannel.USER_ID} [get]`);
logging.log(`DELETE ${RouteChannel.USER_ID} [remove]`);
logging.log(`PATCH ${RouteChannel.USER_ID} [update]`);
logging.log(`PATCH ${RouteChannel.USER_PHOTO} [update-photo]`);
logging.log(`PATCH ${RouteChannel.USER_EMAIL} [update-email]`);
logging.log(`PATCH ${RouteChannel.USER_PASSWORD} [update-password]`);
logging.log(`PATCH ${RouteChannel.USER_SUSPEND} [suspend-account]`);
logging.log("----------------------------------------");

export default router;
