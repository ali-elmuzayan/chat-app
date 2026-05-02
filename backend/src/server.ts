import { createApp } from "./app.js";
import { connectDB } from "./config/db.js";
import { config } from "./config/env.js";

const startServer = () => {
  try {
    // initialize database connection here
    connectDB();

    const app = createApp();

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
