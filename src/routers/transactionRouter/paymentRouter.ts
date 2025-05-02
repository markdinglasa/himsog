import express from "express";
import { TokenHandler } from "../../middleware";
import { RouteChannel } from "../../types";
import { API_VERSION } from "../../constants";
import {
  PaymentAddController,
  PaymentGetAllController,
  PaymentGetController,
  PaymentRemoveController,
  PaymentUpdateController,
  PaymentGetAllMealPlanController,
} from "../../controllers";

const router = express.Router();
router.get(
  `${API_VERSION}${RouteChannel.PAYMENT}`,
  TokenHandler.verifyToken,
  PaymentGetAllController,
);
router.get(
  `${API_VERSION}${RouteChannel.PAYMENT_MEAL_PLAN}`,
  TokenHandler.verifyToken,
  PaymentGetAllMealPlanController,
);
router.post(
  `${API_VERSION}${RouteChannel.PAYMENT}`,
  TokenHandler.verifyToken,
  PaymentAddController,
);
router.get(
  `${API_VERSION}${RouteChannel.PAYMENT_ID}`,
  TokenHandler.verifyToken,
  PaymentGetController,
);
router.delete(
  `${API_VERSION}${RouteChannel.PAYMENT_ID}`,
  TokenHandler.verifyToken,
  PaymentRemoveController,
);
router.patch(
  `${API_VERSION}${RouteChannel.PAYMENT_ID}`,
  TokenHandler.verifyToken,
  PaymentUpdateController,
);

logging.log("----------------------------------------");
logging.log("-----------PAYMENT CONTROLLER-----------");
logging.log(`POST ${RouteChannel.PAYMENT} [add]`);
logging.log(`GET ${RouteChannel.PAYMENT} [get-all]`);
logging.log(`GET ${RouteChannel.PAYMENT_ID} [get]`);
logging.log(`DELETE ${RouteChannel.PAYMENT_ID} [remove]`);
logging.log(`UPDATE ${RouteChannel.PAYMENT_ID} [update]`);
logging.log("----------------------------------------");

export default router;
