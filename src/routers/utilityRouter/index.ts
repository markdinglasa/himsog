import FeedbackRoute from "./feedbackRouter";
import NotificationRoute from "./notificationRouter";
import RemidnerRoute from "./reminderRouter";
import UploadRouter from "./uploadImage";

import express from "express";

const router = express.Router();
router.use(FeedbackRoute);
router.use(NotificationRoute);
router.use(RemidnerRoute);
router.use(UploadRouter);

export default router;
