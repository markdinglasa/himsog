import { Request, Response, NextFunction } from "express";

export function route404(req: Request, res: Response, next: NextFunction) {
  const error = new Error("Not found");
  logging.warning(error.message);

  res.status(404).json({
    error: {
      message: error.message,
    },
  });
}

// Handle preflight requests
export function route204(req: Request, res: Response, next: NextFunction) {
  logging.warning("Preflight requests...");
  res.status(204).end();
}

//  Define a global error handler middleware
export function route500(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  logging.error(err.message);
  res
    .status(500)
    .json({ error: "Something went wrong. Please try again later." });
  next();
}
