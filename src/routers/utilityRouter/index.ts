import FeedbackRoute from "./feedbackRouter";
import NotificationRoute from "./notificationRouter";
import RemidnerRoute from "./reminderRouter";

import express from "express";

const router = express.Router();
router.use(FeedbackRoute);
router.use(NotificationRoute);
router.use(RemidnerRoute);

export default router;
