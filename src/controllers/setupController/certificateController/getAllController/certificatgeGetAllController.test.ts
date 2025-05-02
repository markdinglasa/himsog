import request from "supertest";
import express from "express";
import helmet from "helmet";
import { Success, Error as err } from "../../../../shared";
import { TokenHandler } from "../../../../middleware";
import { CertificateInitial, RouteChannel } from "../../../../types";
import Routes from "../../../../routes";

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
app.use(Routes);

describe("Certificate-GetAllController", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe(RouteChannel.CERTIFICATE_GET_ALL, () => {});
});
