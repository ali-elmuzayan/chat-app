import { Router } from "express";
import { signIn, signUp, signOut } from "../controller/authController.js";

const router = Router();

// ------------------- Sign Up Routes ------------------
router.post("/sign-up", signUp);

// ------------------  sign In routes  --------------------
router.post("/sign-in", signIn);

router.post("/sign-out", signOut);

export default router;
