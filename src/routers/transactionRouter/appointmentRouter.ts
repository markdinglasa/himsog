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
  `${API_VERSION}${RouteChannel.APPOINTMENT_PARENT}`,
  TokenHandler.verifyToken,
  AppointmentGetAllController,
);
router.post(
  `${API_VERSION}${RouteChannel.APPOINTMENT}`,
  TokenHandler.verifyToken,
  AppointmentAddController,
);
router.get(
  `${API_VERSION}${RouteChannel.APPOINTMENT_ID}`,
  TokenHandler.verifyToken,
  AppointmentGetController,
);
router.delete(
  `${API_VERSION}${RouteChannel.APPOINTMENT_ID}`,
  TokenHandler.verifyToken,
  AppointmentRemoveController,
);
router.patch(
  `${API_VERSION}${RouteChannel.APPOINTMENT_ID}`,
  TokenHandler.verifyToken,
  AppointmentUpdateController,
);

logging.log("----------------------------------------");
logging.log("--------APPOINTMENT CONTROLLER----------");
logging.log(`POST ${RouteChannel.APPOINTMENT} [add]`);
logging.log(`GET ${RouteChannel.APPOINTMENT_PARENT} [get-all]`);
logging.log(`GET ${RouteChannel.APPOINTMENT_ID} [get]`);
logging.log(`DELETE ${RouteChannel.APPOINTMENT_ID} [remove]`);
logging.log(`UPDATE ${RouteChannel.APPOINTMENT_ID} [update]`);
logging.log("----------------------------------------");

export default router;
