import { Router } from "express";
import { sendMessage } from "../controller/messageController";
import { authenticated } from "../middleware/authenticated";

const router = Router();

// router.get("/:id", authenticated, getMessages); 
router.post("/send/:id", authenticated, sendMessage);

export default router;
