import express from "express";
import { API_VERSION } from "../../constants";
import { RouteChannel } from "../../types";
import fs from "fs/promises"; // Using fs/promises for promise-based methods
import path from "path";

const router = express.Router();
import multer from "multer";
import { TokenHandler } from "../../middleware";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const targetDir = path.join(
      __dirname,
      "..",
      "..",
      "..",
      "frontend",
      "public",
      "image",
    );
    console.log("targetDir:", targetDir);
    fs.mkdir(targetDir, { recursive: true })
      .then(() => cb(null, targetDir))
      .catch((err) => cb(err, targetDir));
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    cb(null, `${uniqueSuffix}${ext}`);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 2 * 1024 * 1024 }, // 2MB limit
  fileFilter: (req, file, cb) => {
    const allowedTypes = [".jpg", ".jpeg", ".png"];
    const ext = path.extname(file.originalname).toLowerCase();
    if (allowedTypes.includes(ext)) {
      cb(null, true);
    } else {
      cb(new Error("Only JPG, PNG, and JPEG files are allowed."));
    }
  },
});

router.post(
  `${API_VERSION}${RouteChannel.UPLOAD_IMAGE}`,
  TokenHandler.verifyToken,
  upload.single("image"),
  (req, res) => {
    try {
      console.log(req.file);
      if (req.file) {
        res.json({
          message: "Image uploaded successfully",
          path: `/image/${req.file.filename}`,
        });
      } else {
        res.status(400).json({ path: null, message: "Failed to upload image" });
      }
    } catch (error: any) {
      res.status(500).json({
        path: null,
        message: error.message || "Failed to upload image",
      });
    }
  },
);
export default router;
