import type { RequestHandler } from "express";

import User from "../model/userModel.js";
import { catchAsync } from "../utils/handleErrors.js";
import { verifyToken } from "../services/jwtServices.js";

export const authenticated: RequestHandler = catchAsync(async (req, res, next) => {
  const token = req.cookies.accessToken;

  if (!token)
    return res.status(401).json({ error: "Unauthorized - No Token Provided" });

  const decode = verifyToken(token);
  if (!decode)
    return res.status(401).json({ error: "Unauthorized - Invalid Token" });

  const user = await User.findById(decode.data).select("-password");
  if (!user) return res.status(404).json({ error: "User not found" });

  // store the user in the request object for later use in the route handlers
  req.user = user;
  next();
});
