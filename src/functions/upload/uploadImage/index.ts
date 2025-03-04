import fs from "fs/promises"; // Using fs/promises for promise-based methods
import path from "path";
import { createHash } from "crypto";
import { fileURLToPath } from "url";
import multer from "multer";

/****************************************************************
  STATUS               : UPDATED
  DATE CREATED/UPDATED : September 10, 2024
  PURPOSE              : To upload an image
  PROGRAMMER           : MARK DINGLASA
  FUNCTION NAME        : uploadImage(imagePath)
****************************************************************/

const targetDir = path.join(__dirname, "./frontend", "public", "image");

const storage = multer.diskStorage({
  destination: function (
    _req: any,
    _file: any,
    cb: (arg0: null, arg1: string) => void,
  ) {
    cb(null, targetDir);
  },
  filename: function (_req, _file, cb) {
    const filename = `${Date.now()}.jpg`;
    cb(null, filename);
  },
});

export const upload = multer({ storage: storage });

export const uploadImage = async (imagePath: string) => {
  try {
    const MB = 1048576;
    const imgfile = path.parse(imagePath).base.replace(/\\/g, "/");
    if (!imgfile) return { data: null, message: "Please select an image" };

    //sends the image to the client side
    const targetFile = path.join(targetDir, imgfile);
    const imageFileType = path.extname(targetFile).toLowerCase();

    // Check if imagePath is a directory
    const isDirectory = await fs
      .stat(imagePath)
      .then((stats) => stats.isDirectory());
    if (isDirectory)
      return {
        data: null,
        message: "Please provide a valid image file path, not a directory",
      };

    if (
      imageFileType !== ".jpg" &&
      imageFileType !== ".png" &&
      imageFileType !== ".jpeg"
    ) {
      return {
        data: null,
        message: "Only JPG, PNG, and JPEG files are allowed.",
      };
    }

    const imageStats = await fs.stat(imagePath);
    if (imageStats.size > 2 * MB) {
      return { data: null, message: "Image file size is more than 2 MB" };
    }

    const imgnewfile =
      createHash("md5").update(imgfile).digest("hex") +
      Date.now() +
      path.extname(imgfile);

    // Ensure the target directory exists
    await fs.mkdir(targetDir, { recursive: true });

    // Copy image to destination directory
    await fs.copyFile(imagePath, path.join(targetDir, imgnewfile));

    // Return the new file name if there were no errors
    return { data: imgnewfile, message: "Successful" };
  } catch (error: any) {
    return { data: null, message: error.message };
  }
};
