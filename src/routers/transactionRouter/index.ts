import AppointmentRotue from "./appointmentRouter";
import PaymentRouter from "./paymentRouter";
import MealPlanRequstRouter from "./mealPlanRequestRouter";
import MealPlanRating from "./mealPlanRatingRouter";

import express from "express";

const Router = express.Router();
Router.use(AppointmentRotue);
Router.use(PaymentRouter);
Router.use(MealPlanRequstRouter);
Router.use(MealPlanRating);

export default Router;
