import FeedbackRoute from "./feedbackRoute";
import NotificationRoute from "./notificationRoute";
import RemidnerRoute from "./reminderRoute";

import express from "express";

const router = express.Router();
router.use(FeedbackRoute);
router.use(NotificationRoute);
router.use(RemidnerRoute);

export default router;
