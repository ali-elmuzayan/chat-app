import jwt from "jsonwebtoken";
import { config } from "../config/env.js";

// Generate a JWT token for the given data and expiration time
export const generateToken = (data, expireIn = "15m") => {
  const token = jwt.sign({ data }, config.jwtSecret, { expiresIn: expireIn });
  return token;
};

// Verify the token and return the decoded payload
export const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, config.jwtSecret);
    return decoded;
  } catch (error) {
    throw new Error("Invalid token");
  }
};
