import jwt from "jsonwebtoken";
import { config } from "../config/env";

// Generate a JWT token for the given data and expiration time
export const generateToken = (data: any, expireIn = "15m") => {
  const token = jwt.sign({ data }, config.jwtSecret, { expiresIn: expireIn });
  return token;
};

// Verify the token and return the decoded payload
export const verifyToken = (token: string) => {
  try {
    const decoded = jwt.verify(token, config.jwtSecret);
    return decoded;
  } catch (error: any) {
    throw new Error("Invalid token");
  }
};
