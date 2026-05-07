import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
  createdAt: Date;
  email: string;
  name: string;
  password: string;
  profilePicture: string;
  updatedAt: Date;
}

const userSchema = new Schema<IUser>(
  {
    email: {
      lowercase: true,
      required: [true, "Please provide your email"],
      trim: true,
      type: String,
      unique: true,
    },
    name: {
      required: [true, "Please provide your name"],
      type: String,
    },
    password: {
      minlength: [6, "Password must be at least 6 characters"],
      required: [true, "Please provide your password"],
      type: String,
    },
    profilePicture: {
      default: "https://res.cloudinary.com/dzj6dhn0n/image/upload/v1690794417/default-profile-picture_ajlq8h.png",
      type: String,
    },
  },
  // For forget password reset token 
  
  {
    timestamps: true,
  },  
);

const User = mongoose.model<IUser>("User", userSchema);

export default User;
