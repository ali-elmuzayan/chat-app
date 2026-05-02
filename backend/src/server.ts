import express from "express";

import { createApp } from "./app";
// import { connectDB } from "./config/db";
import { config } from "./config/env";

const startServer = () => {
  try {
    // initialize database connection here
    // connectDB();

    // const app = createApp();
    const app = express();

    app.listen(config.port, () => {
      console.log(`🚀 Server running on http://localhost:${config.port}`);
      console.log(`📝 Environment: ${config.nodeEnv}`);
    });
  } catch (error: any) {
    console.error(`Error: Failed to start the server: ${error.message}`);
    process.exit(1);
  }
};

startServer();
