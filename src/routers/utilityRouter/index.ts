import FeedbackRoute from "./feedbackRouter";
import NotificationRoute from "./notificationRouter";
import RemidnerRoute from "./reminderRouter";
import UploadRouter from "./uploadImage";
import TokenValidator from "./tokenValidatorRouter";

import express from "express";

const router = express.Router();
router.use(TokenValidator);
router.use(FeedbackRoute);
router.use(NotificationRoute);
router.use(RemidnerRoute);
router.use(UploadRouter);

export default router;
