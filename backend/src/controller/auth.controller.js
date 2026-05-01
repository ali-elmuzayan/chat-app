import User from "../model/userModel.js";
import { hashPassword } from "../services/hashServices.js";

const signUp = async (req, res) => {
  // TODO: 1) validate the input
  const { name, email, password, confirmPassword } = req.body;
  if (!name || !email || !password || !confirmPassword) {
    return res.status(400).json({
      status: "fail",
      message: "please provide all the required fields",
    });
  }

  // Check if the user Exist in the database,
  $existUser = await User.findOne({ email });
  if ($existUser)
    return res.status(400).json({
      status: "fail",
      message: "Invalid authentication credentials",
    });

  // TODO: 4) add the user in the database
  $newUser = await User.create({
    name,
    email,
    password: hashPassword(password),
  });

  // handle authentication generate access token and refresh token

  return res.status(200).json({
    status: "success",
    message: "you have register successfully",
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
  // TODO: 02) check the password is correct
  // TODO: 03) login the user successfully by return the token
  return res.status(200).json({
    status: "success",
    message: "you have login successfully",
  });
};

const signOut = (req, res) => {
  return res.status(200).json({
    status: "success",
    message: "you have logout successfully",
  });
};

export { signIn, signUp, signOut };
