import { Router } from "express";
import { authenticated } from "../middleware/authenticated";
import User from "../model/userModel";

const router = Router();

// get the Users that have conversations with the login user,
router.get("/", authenticated, async (req, res) => {
  const loggedInUserId = req.user._id;

  const friends = await User.find({ _id: { $ne: loggedInUserId } }).select(
    "-password",
  );

  if (!friends) {
    return res.status(404).json({ message: "No friends found" });
  }
  res.json(friends);
});

export default router;
