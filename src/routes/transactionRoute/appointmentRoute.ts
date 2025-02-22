import express from "express";
import { TokenHandler } from "../../middleware";
import { RouteChannel } from "../../types";
import { API_VERSION } from "../../constants";
import {
  AppointmentAddController,
  AppointmentGetAllController,
  AppointmentGetController,
  AppointmentRemoveController,
  AppointmentUpdateController,
} from "../../controllers/";

const router = express.Router();
router.get(
  `${API_VERSION}${RouteChannel.APPOINTMENT_GET_ALL}`,
  TokenHandler.verifyToken,
  AppointmentGetAllController,
);
router.get(
  `${API_VERSION}${RouteChannel.APPOINTMENT_GET}`,
  TokenHandler.verifyToken,
  AppointmentGetController,
);
router.get(
  `${API_VERSION}${RouteChannel.APPOINTMENT_NEW}`,
  TokenHandler.verifyToken,
  AppointmentAddController,
);
router.get(
  `${API_VERSION}${RouteChannel.APPOINTMENT_REMOVE}`,
  TokenHandler.verifyToken,
  AppointmentRemoveController,
);
router.get(
  `${API_VERSION}${RouteChannel.APPOINTMENT_UPDATE}`,
  TokenHandler.verifyToken,
  AppointmentUpdateController,
);

logging.log("----------------------------------------");
logging.log("--------APPOINTMENT CONTROLLER----------");
logging.log(RouteChannel.NOTIFICATION_GET);
logging.log(RouteChannel.APPOINTMENT_GET_ALL);
logging.log(RouteChannel.APPOINTMENT_NEW);
logging.log(RouteChannel.APPOINTMENT_REMOVE);
logging.log(RouteChannel.APPOINTMENT_UPDATE);
logging.log("----------------------------------------");

export default router;
