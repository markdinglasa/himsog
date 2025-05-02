import request from "supertest";
import express from "express";
import helmet from "helmet";
import { Success, Error as err } from "../../../../shared";
import { TokenHandler } from "../../../../middleware";
import { certificateValidator } from "../../../../validators";
import { CertificateInitial, RouteChannel } from "../../../../types";
import { CertificateUpdateController } from "./index";
import Routes from "../../../../routes";

jest.mock("../../../../validators", () => ({
  certificateValidator: {
    validate: jest.fn(),
  },
}));

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

describe("Certificate-UpdateController", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe(RouteChannel.CERTIFICATE_UPDATE, () => {});
});
