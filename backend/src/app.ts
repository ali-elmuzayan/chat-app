import express from "express";
import AppError from "./utils/appError";
import { globalErrorHandler } from "./services/errorServices";
import authRoutes from "./routes/authRoute";
import healthRoutes from "./routes/healthRoute";
import usersRoutes from "./routes/usersRoute";
import messageRoutes from "./routes/messageRoute";
import cookieParser from "cookie-parser";
import { config } from "./config/env";

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

  // global error handling middleware
  app.use(globalErrorHandler);

  // App Routes
  app.use(`${routesPrefix}/auth`, authRoutes);
  app.use(`${routesPrefix}/users`, usersRoutes);
  app.use(`${routesPrefix}/messages`, messageRoutes);
  app.use("/health", healthRoutes);

  // Catch all unknown routes
  app.use((req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} this page`, 404));
  });

  return app;
};
