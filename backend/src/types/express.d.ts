import type { HydratedDocument } from "mongoose";

import type { IUser } from "../model/userModel.js";

declare global {
  namespace Express {
    interface Request {
      user: HydratedDocument<IUser>;
    }
  }
}

export {};
