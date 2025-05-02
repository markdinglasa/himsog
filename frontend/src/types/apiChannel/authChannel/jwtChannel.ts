import { BASE_URL } from "../../../shared";

export const JWTChannel = {
  JWT_LOGIN: `${BASE_URL}/auth/jwt-login`,
  JWT_LOGOUT: `${BASE_URL}/auth/logout`,
  JWT_REFRESH: `${BASE_URL}/auth/refresh`,
};
