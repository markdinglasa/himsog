import AppointmentRotue from "./appointmentRoute";
import PaymentRoute from "./paymentRoute";
import MealPlanRequstRoute from "./mealPlanRequestRoute";
import express from "express";

const router = express.Router();
router.use(AppointmentRotue);
router.use(PaymentRoute);
router.use(MealPlanRequstRoute);

export default router;
