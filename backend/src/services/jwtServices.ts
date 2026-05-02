import type { Types } from "mongoose";

import jwt, { type JwtPayload, type SignOptions } from "jsonwebtoken";

import { config } from "../config/env.js";

// Generate a JWT token for the given data and expiration time
export const generateToken = (data: Types.ObjectId, expireIn: SignOptions["expiresIn"] = "15m") => {
  const token = jwt.sign({ data }, config.jwtSecret, { expiresIn: expireIn });
  return token;
};

// Verify the token and return the decoded payload
export const verifyToken = (token: string) => {
  try {
    const decoded = jwt.verify(token, config.jwtSecret) as JwtPayload & {
      data: string;
    };
    return decoded;
  } catch (error: unknown) {
    throw new Error("Invalid token", { cause: error });
  }
};
