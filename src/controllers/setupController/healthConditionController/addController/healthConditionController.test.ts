import request from "supertest";
import express from "express";
import helmet from "helmet";
import { Success, Error as err } from "../../../../shared";
import { TokenHandler } from "../../../../middleware";
import { certificateValidator } from "../../../../validators";
import { CertificateInitial, RouteChannel } from "../../../../types";
import { HealthConditionAddController } from "./index";

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
app.post(
  RouteChannel.HEALTH_CONDITION_NEW,
  TokenHandler.verifyToken,
  HealthConditionAddController,
);

describe("HealthCondition-AddController", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe(RouteChannel.HEALTH_CONDITION_NEW, () => {
    it("should create a new record", async () => {
      (certificateValidator.validate as jest.Mock).mockResolvedValueOnce({
        error: [],
      });

      const response = await request(app)
        .post(RouteChannel.HEALTH_CONDITION_NEW)
        .send(CertificateInitial)
        .set("Authorization", "Bearer valid-access-token");

      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        data: true,
        message: Success.m001,
      });
    });

    it("should return 401 for invalid input", async () => {
      const response = await request(app)
        .post(RouteChannel.HEALTH_CONDITION_NEW)
        .send(CertificateInitial)
        .set("Authorization", "Bearer valid-access-token");

      expect(response.status).toBe(401);
      expect(response.body).toEqual({
        data: false,
        message: err.m029,
      });
    });
  });
});
