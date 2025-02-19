import express from "express";
import AuthRoute from "./authRoute";
import SetupRoute from "./setupRoute";
import TransactionRoute from "./transactionRoute";
import UtilityRoute from "./utilityRoute";

const router = express.Router();
router.use(AuthRoute);
router.use(SetupRoute);
router.use(TransactionRoute);
router.use(UtilityRoute);

export default router;
