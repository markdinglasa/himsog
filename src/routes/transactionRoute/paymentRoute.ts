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
} from "../../controllers";

const router = express.Router();
router.get(
  `${API_VERSION}${RouteChannel.PAYMENT_GET}`,
  TokenHandler.verifyToken,
  PaymentGetController,
);
router.get(
  `${API_VERSION}${RouteChannel.PAYMENT_GET_ALL}`,
  TokenHandler.verifyToken,
  PaymentGetAllController,
);
router.get(
  `${API_VERSION}${RouteChannel.PAYMENT_NEW}`,
  TokenHandler.verifyToken,
  PaymentAddController,
);
router.get(
  `${API_VERSION}${RouteChannel.PAYMENT_REMOVE}`,
  TokenHandler.verifyToken,
  PaymentRemoveController,
);
router.get(
  `${API_VERSION}${RouteChannel.PAYMENT_UPDATE}`,
  TokenHandler.verifyToken,
  PaymentUpdateController,
);

logging.log("----------------------------------------");
logging.log("-----------PAYMENT CONTROLLER-----------");
logging.log(RouteChannel.PAYMENT_GET);
logging.log(RouteChannel.PAYMENT_GET_ALL);
logging.log(RouteChannel.PAYMENT_NEW);
logging.log(RouteChannel.PAYMENT_REMOVE);
logging.log(RouteChannel.PAYMENT_UPDATE);
logging.log("----------------------------------------");

export default router;
