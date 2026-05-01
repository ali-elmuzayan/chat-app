import { config } from "../config/env";

export const setTokenCookies = (res, accessToken, refreshToken) => {
  res.cookie("accessToken", accessToken, {
    httpOnly: true,
    secure: config.nodeEnv === "production",
    sameSite: "strict",
    maxAge: 15 * 60 * 1000, // 15 minutes
  });
};

// TODO: Store the token in the redis

export const authenticateUser = (userId, res) => {
  const accessToken = generateToken(userId);
  const refreshToken = generateToken(userId, "7d");

  // TODO: await storeRefreshTokenInRedis(userId, refreshToken);
  setTokenCookies(res, accessToken, refreshToken);
};
