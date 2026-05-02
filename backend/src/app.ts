import cookieParser from "cookie-parser";
import express from "express";

import { config } from "./config/env.js";
import authRoutes from "./routes/authRoute.js";
import healthRoutes from "./routes/healthRoute.js";
import messageRoutes from "./routes/messageRoute.js";
import usersRoutes from "./routes/usersRoute.js";
import { globalErrorHandler } from "./services/errorServices.js";
import AppError from "./utils/appError.js";

export const createApp = () => {
  const app = express();
  const routesPrefix = "/api/v1";

  // middleware:
  app.use(express.json()); // for the parsing application/json
  app.use(cookieParser()); // for parsing cookies

  // for showing each route visited in the console
  if (config.nodeEnv === "development") {
    app.use((req, res, next) => {
      console.log(`${req.method} ------- ${req.originalUrl}`);
      next();
    });
  }

  // App Routes
  app.use(`${routesPrefix}/auth`, authRoutes);
  app.use(`${routesPrefix}/users`, usersRoutes);
  app.use(`${routesPrefix}/messages`, messageRoutes);
  app.use("/health", healthRoutes);

  // Catch all unknown routes
  app.use((req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} this page`, 404));
  });

  // global error handling middleware
  app.use(globalErrorHandler);

  return app;
};
