import dotenv from "dotenv";
import { randomBytes } from "crypto";

dotenv.config();

export const NODE_ENV = process.env.NODE_ENV;
export const TEST = process.env.NODE_ENV === "test";

export const DB_USER = process.env.DB_USER || "";
export const DB_PASSWORD = process.env.DB_PASSWORD || "";
export const DB_HOST = process.env.DB_HOST || "";
export const DB_URL = process.env.DB_URL || "";
export const DB_PORT = process.env.DB_PORT || 3306;
export const DB_NAME = process.env.DB_NAME || "";

export const SERVER_PASSWORD = process.env.SERVER_PASSWORD;
export const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || "localhost";
export const SERVER_PORT = process.env.SERVER_PORT
  ? Number(process.env.SERVER_PORT)
  : 3500;

export const server = {
  SERVER_HOSTNAME,
  SERVER_PORT,
};

export const SECRET_KEY =
  process.env.SECRET_KEY || randomBytes(32).toString("hex");
export const SECRET_REFRESH_KEY =
  process.env.SECRET_REFRESH_KEY || randomBytes(32).toString("hex");
export const TOKEN_EXPIRATION = "30d";
export const SESSION_SECRET: string = process.env.SESSION_SECRET || "myk-sx2";

// GOOGLE API
export const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || "";
export const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET || "";
export const GOOGLE_URL = process.env.GOOGLE_URL || "";
export const OPENAI_KEY = process.env.OPENAI_KEY || "";
export const SCRAPPER_API_KEY = process.env.SCRAPPER_API_KEY || "";
export const SERPAPI_KEY = process.env.SERPAPI_KEY || "";
export const GITHUB_TOKEN = process.env.GITHUB_TOKEN || "";
// EMAIL
export const DEFAULT_EMAIL = process.env.DEFAULT_EMAIL || "";
export const DEFAULT_EMAIL_PASSWORD = process.env.DEFAULT_EMAIL_PASSWORD || "";
