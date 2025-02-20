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
  `${API_VERSION}${RouteChannel.CERTIFICATE_GET}`,
  TokenHandler.verifyToken,
  CertificateGetController,
);
router.get(
  `${API_VERSION}${RouteChannel.CERTIFICATE_GET_ALL}`,
  TokenHandler.verifyToken,
  CertificateGetAllController,
);
router.post(
  `${API_VERSION}${RouteChannel.CERTIFICATE_NEW}`,
  TokenHandler.verifyToken,
  CertificateAddController,
);
router.delete(
  `${API_VERSION}${RouteChannel.CERTIFICATE_REMOVE}`,
  TokenHandler.verifyToken,
  CertificateRemoveController,
);
router.patch(
  `${API_VERSION}${RouteChannel.CERTIFICATE_UPDATE}`,
  TokenHandler.verifyToken,
  CertificateUpdateController,
);

logging.log("----------------------------------------");
logging.log("--------CERTIFICATE CONTROLLER----------");
logging.log(RouteChannel.CERTIFICATE_GET);
logging.log(RouteChannel.CERTIFICATE_GET_ALL);
logging.log(RouteChannel.CERTIFICATE_NEW);
logging.log(RouteChannel.CERTIFICATE_REMOVE);
logging.log(RouteChannel.CERTIFICATE_UPDATE);
logging.log("----------------------------------------");

export default router;
