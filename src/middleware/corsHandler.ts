import { Request, Response, NextFunction } from "express";

type RequestHandler = (req: Request, res: Response, next: NextFunction) => any;

// Define a whitelist of allowed origins
const allowedOrigins = [
  "http://127.0.0.1:4173",
  "http://localhost:4173",
  "http://127.0.0.1:5173",
  "http://localhost:5173",
];

export const corsHandler: RequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const origin = req.header("origin");

  // Allow only whitelisted origins
  if (origin && allowedOrigins.includes(origin)) {
    res.header("Access-Control-Allow-Origin", origin);
    res.header("Vary", "Origin");
  }

  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization, X-Auth-Provider",
  );
  res.header("Referrer-Policy", "no-referrer-when-downgrade");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTIONS",
  );

  if (req.method === "OPTIONS") {
    // Respond to preflight requests
    return res.status(204).end();
  }

  if (req.path.includes("/favicon.ico")) {
    // Ignore favicon requests
    return res.status(204).end();
  }

  next();
};
