import express from 'express';
import { protectRoute } from '../middleware/auth';
import { getMessages, getUserForSiderbar, markMessageAsSeen, sendMessage } from '../controllers/messageController';
import { get } from 'mongoose';
import { checkAuth } from '../middleware/auth';
import User from '../models/User.js';
import Message from '../models/Message.js';


const messageRouter = express.Router();

messageRouter.get("/users", protectRoute, getUserForSiderbar );
messageRouter.get("/:id", protectRoute, getMessages);
messageRouter.put("/:id", protectRoute, markMessageAsSeen);
messageRouter.post("/send/:id", protectRoute, sendMessage);

export default messageRouter;

