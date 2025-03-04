import UploadImage from "./uploadImage";
import express from "express";

const router = express.Router();
router.use(UploadImage);

export default router;
