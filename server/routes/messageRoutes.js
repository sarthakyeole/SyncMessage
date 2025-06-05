import express from "express"
import { protectRoute } from "../middleware/auth.js"
import {
  getMessages,
  getUserForSiderbar,
  markMessageAsSeen,
  sendMessage,
} from "../controllers/messageController.js"

const messageRouter = express.Router()

messageRouter.get("/users", protectRoute, getUserForSiderbar)
messageRouter.get("/:id", protectRoute, getMessages)
messageRouter.put("/:id", protectRoute, markMessageAsSeen)
messageRouter.post("/send/:id", protectRoute, sendMessage)

export default messageRouter
