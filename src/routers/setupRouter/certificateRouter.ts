import express from "express";
import { TokenHandler } from "../../middleware";
import { RouteChannel } from "../../types";
import { API_VERSION } from "../../constants";
import {
  CertificateAddController,
  CertificateGetAllController,
  CertificateGetController,
  CertificateRemoveController,
  CertificateUpdateController,
} from "../../controllers";

const router = express.Router();
router.get(
  `${API_VERSION}${RouteChannel.CERTIFICATE_PARENT}`,
  TokenHandler.verifyToken,
  CertificateGetAllController,
);
router.post(
  `${API_VERSION}${RouteChannel.CERTIFICATE}`,
  TokenHandler.verifyToken,
  CertificateAddController,
);
router.get(
  `${API_VERSION}${RouteChannel.CERTIFICATE_ID}`,
  TokenHandler.verifyToken,
  CertificateGetController,
);
router.delete(
  `${API_VERSION}${RouteChannel.CERTIFICATE_ID}`,
  TokenHandler.verifyToken,
  CertificateRemoveController,
);
router.patch(
  `${API_VERSION}${RouteChannel.CERTIFICATE_ID}`,
  TokenHandler.verifyToken,
  CertificateUpdateController,
);

logging.log("----------------------------------------");
logging.log("--------CERTIFICATE CONTROLLER----------");
logging.log(`GET ${RouteChannel.CERTIFICATE_PARENT} [get-all]`);
logging.log(`POST ${RouteChannel.CERTIFICATE} [add]`);
logging.log(`GET ${RouteChannel.CERTIFICATE_ID} [get]`);
logging.log(`DELETE ${RouteChannel.CERTIFICATE_ID} [remove]`);
logging.log(`PATCH ${RouteChannel.CERTIFICATE_ID} [update]`);
logging.log("----------------------------------------");

export default router;
