import express from "express";
import { TokenHandler } from "../../middleware";
import { API_VERSION } from "../../constants";
import { TokenValidatorController } from "../../controllers";

const router = express.Router();
router.post(
  `${API_VERSION}/token-validator`,
  TokenHandler.verifyToken,
  TokenValidatorController,
);

logging.log("----------------------------------------");
logging.log("-------TOKEN VALIDATOR CONTROLLER-------");
logging.log(`POST ${"token-validator"} [add]`);
logging.log("----------------------------------------");

export default router;
