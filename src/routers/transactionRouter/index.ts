import AppointmentRotue from "./appointmentRouter";
import PaymentRouter from "./paymentRouter";
import MealPlanRequstRouter from "./mealPlanRequestRouter";
import express from "express";

const Router = express.Router();
Router.use(AppointmentRotue);
Router.use(PaymentRouter);
Router.use(MealPlanRequstRouter);

export default Router;
