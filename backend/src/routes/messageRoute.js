import { Router } from "express";
import { sendMessage } from "../controller/messageController.js";
import { authenticated } from "../middleware/authenticated.js";

const router = Router();

router.get("/:id", authenticated, getMessages); 
router.post("/send/:id", authenticated, sendMessage);

export default router;
