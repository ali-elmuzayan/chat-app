import mongoose from "mongoose";
import { config } from "./env";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(config.mongoURI);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error Connecting to mongoDB: ${error.message}`);
    process.exit(1);
  }
};
