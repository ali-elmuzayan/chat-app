import { access } from "fs";
import User from "../model/userModel.js";
import { authenticateUser } from "../services/authServices.js";
import { hashPassword } from "../services/hashServices.js";
import { validateSignUpRequest } from "../services/validationServices.js";

const signUp = async (req, res) => {
  const validatedRequest = validateSignUpRequest(req);

  if (!validatedRequest.isValid) {
    return res.status(400).json({
      status: "fail",
      message: validatedRequest.message,
    });
  }

  const existUser = await User.findOne({ email: validatedRequest.email });

  if (existUser)
    return res.status(400).json({
      status: "fail",
      message: "Invalid authentication credentials",
    });

  // 4) add the user in the database

  const newUser = await User.create({
    name: validatedRequest.name,
    email: validatedRequest.email,
    password: await hashPassword(validatedRequest.password),
    profilePicture: `https://i.pravatar.cc/300`,
  });

  // handle authentication generate access token and refresh token
  const accessToken = authenticateUser(newUser._id, res);

  return res.status(201).json({
    status: "success",
    message: "you have register successfully",
    data: {
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        profilePicture: newUser.profilePicture,
      },
      accessToken,
    },
  });
};

const signIn = (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      status: "fail",
      message: "please provide email and password",
    });
  }

  // TODO: 01) check the user exist in the database
  const existUser = User.findOne({ email });
  if (!existUser) {
    return res.status(400).json({
      status: "fail",
      message: "Invalid authentication credentials",
    });
  }
  // TODO: 02) check the password is correct
  const isPasswordCorrect = existUser.comparePassword(password);
  if (!isPasswordCorrect) {
    return res.status(400).json({
      status: "fail",
      message: "Invalid authentication credentials",
    });
  }
  // TODO: 03) login the user successfully by return the token
  const accessToken = authenticateUser(existUser._id, res);

  
  return res.status(200).json({
    status: "success",
    message: "you have login successfully",
    data: {
      accessToken,
    },
  });
};

const signOut = (req, res) => {
  return res.status(200).json({
    status: "success",
    message: "you have logout successfully",
  });
};

export { signIn, signUp, signOut };
