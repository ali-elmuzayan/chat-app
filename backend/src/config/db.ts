import mongoose from "mongoose";

import { config } from "./env.ts";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(config.mongoURI);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error(`Error Connecting to mongoDB: ${message}`);
    process.exit(1);
  }
};
