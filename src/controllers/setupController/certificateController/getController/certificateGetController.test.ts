import request from "supertest";
import express from "express";
import helmet from "helmet";
import { Success, Error as err } from "../../../../shared";
import { TokenHandler } from "../../../../middleware";
import { CertificateInitial, RouteChannel } from "../../../../types";
import { CertificateGetController } from "./index";

jest.mock("../../../../middleware", () => ({
  TokenHandler: {
    verifyToken: jest.fn((req, res, next) => {
      req.User = 1; // Mock user ID
      req.AccessToken = "valid-access-token";
      req.RefreshToken = "valid-refresh-token";
      next();
    }),
  },
}));

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet());
app.post(
  RouteChannel.CERTIFICATE_GET,
  TokenHandler.verifyToken,
  CertificateGetController,
);

describe("Certificate-GetController", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe(RouteChannel.CERTIFICATE_GET, () => {});
});
