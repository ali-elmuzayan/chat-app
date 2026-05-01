import express from "express";
import AppError from "./utils/appError.js";
import authRoutes from "./routes/authRoute.js";
import healthRoutes from "./routes/healthRoute.js";
import usersRoutes from "./routes/usersRoute.js";
import cookieParser from "cookie-parser";
import { config } from "./config/env.js";

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
  app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || "error";

    return res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  });

  // App Routes
  app.use(`${routesPrefix}/auth`, authRoutes);
  app.use(`${routesPrefix}/users`, usersRoutes);
  app.use("/health", healthRoutes);

  // Catch all unknown routes
  app.use((req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} this page`, 404));
  });

  return app;
};
