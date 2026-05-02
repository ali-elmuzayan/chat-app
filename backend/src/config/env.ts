import dotenv from "dotenv";

dotenv.config();

export interface Config {
  port: number;
  nodeEnv: string;
  mongoURI?: string;
  jwtSecret?: string;
}

export const config: Config = {
  port: parseInt(process.env.PORT || "3000", 10),
  nodeEnv: process.env.NODE_ENV || "development",
  mongoURI: process.env.MONGO_URI!,
  jwtSecret: process.env.JWT_SECRET!,
};
