import express from "express";
import AuthRouter from "./authRouter";
import SetupRouter from "./setupRouter";
import TransactionRouter from "./transactionRouter";
import UtilityRouter from "./utilityRouter";
import UploadRoute from "./uploadRouter";

const router = express.Router();
router.use(AuthRouter);
router.use(SetupRouter);
router.use(TransactionRouter);
router.use(UtilityRouter);
router.use(UploadRoute);

export default router;
