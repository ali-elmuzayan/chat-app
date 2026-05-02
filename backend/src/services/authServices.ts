import { config } from "../config/env";
import { generateToken } from "./jwtServices";

export const setTokenCookies = (res, accessToken) => {
  res.cookie("accessToken", accessToken, {
    httpOnly: true, // prevent XSS attacks across-site scripting
    secure: config.nodeEnv === "production", // only send cookies over HTTPS in production
    sameSite: "strict", // prevent CSRF attacks
    maxAge: 15 * 60 * 1000, // 15 minutes
  });
};

// TODO: Store the token in the redis

export const authenticateUser = (userId, res) => {
  const accessToken = generateToken(userId);

  // TODO: await storeRefreshTokenInRedis(userId, refreshToken);
  setTokenCookies(res, accessToken);
  return accessToken;
};
