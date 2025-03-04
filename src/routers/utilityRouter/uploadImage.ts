import express, { Request, Response } from "express";
import { uploadImage } from "../../functions";
import { TokenHandler } from "../../middleware";
import { Error } from "../../shared";
import { API_VERSION } from "../../constants";
import { RouteChannel } from "../../types";

const router = express.Router();
router.post(
  `${API_VERSION}${RouteChannel.UPLOAD_IMAGE}`,
  TokenHandler.verifyToken,
  async (req: Request, res: Response): Promise<any> => {
    try {
      const Data = req.body;
      if (!Data || Data === null || Data === undefined)
        return res.status(401).json({ data: false, message: Error.m014 });
      const upload = await uploadImage(Data.Image);
      if (!upload.data)
        return res.status(500).json({
          data: null,
          message: upload.message || "Failed to upload image",
        });
      return res.status(200).json({
        data: upload.data,
        message: upload.message || "Image is uploaded",
      });
    } catch (error: any) {
      return res.status(500).json({
        data: null,
        message: error.message || "Failed to upload image",
      });
    }
  },
);

export default router;
