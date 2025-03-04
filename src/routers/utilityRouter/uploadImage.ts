import express, { Request, Response } from "express";

import { Error as err } from "../../shared";
import { API_VERSION } from "../../constants";
import { RouteChannel } from "../../types";
import fs from "fs/promises"; // Using fs/promises for promise-based methods
import path from "path";
import { createHash } from "crypto";

const router = express.Router();
import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const targetDir = path.join(
      __dirname,
      "..",
      "..",
      "..",
      "..",
      "frontend",
      "public",
      "image",
    );
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
  upload.single("image"), // Middleware to handle file upload
  async (req: Request, res: Response): Promise<any> => {
    try {
      if (!req.file) {
        return res.status(400).json({
          data: null,
          message: "No file uploaded.",
        });
      }

      const { filename, path: filePath } = req.file;

      // Return the file path or filename to the client
      return res.status(200).json({
        data: filename,
        message: "Image uploaded successfully.",
      });
    } catch (error: any) {
      console.error("Error uploading image:", error);
      return res.status(500).json({
        data: null,
        message: error.message || "Failed to upload image.",
      });
    }
  },
);

export default router;
