import type { Response } from "express";
import type { Types } from "mongoose";

import { config } from "../config/env.js";
import { generateToken } from "./jwtServices.js";

export const setTokenCookies = (res: Response, accessToken: string) => {
  res.cookie("accessToken", accessToken, {
    httpOnly: true, // prevent XSS attacks across-site scripting
    secure: config.nodeEnv === "production", // only send cookies over HTTPS in production
    sameSite: "strict", // prevent CSRF attacks
    maxAge: 15 * 60 * 1000, // 15 minutes
  });
};

// TODO: Store the token in the redis

export const authenticateUser = (userId: Types.ObjectId, res: Response) => {
  const accessToken = generateToken(userId);

  // TODO: await storeRefreshTokenInRedis(userId, refreshToken);
  setTokenCookies(res, accessToken);
  return accessToken;
};
