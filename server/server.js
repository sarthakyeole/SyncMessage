import express from 'express';
import "dotenv/config";
import cors from 'cors';
import http from 'http';
import { connectDB } from './lib/db.js';
import { asyncWrapProviders } from 'async_hooks';
import userRouter from './routes/userRoutes.js';
import messageRouter from './routes/messageRoutes.js';
import { Server } from 'socket.io';

// create express app and HTTP server
const app = express();
const server = http.createServer(app);

// initialize Socket.IO server
export const io = new Server(server,  {
    cors: {
        origin: "*"
    }
})

// store online users
export const userSocketMap = {};  // { userId: socketId }

// Socket.io connection handler
io.on("connection", (socket)=>{
    const userId = socket.handshake.query.userId;
    console.log("User connected", userId);

    if(userId) userSocketMap[userId] = socket.id;

    // Emit online users to all clients
    io.emit("getOnlineUsers", Object.keys(userSocketMap));

    socket.on("disconnect", ()=>{
        console.log("User disconnected", userId);
        delete userSocketMap[userId];
        delete userSocketMap[userId];
        io.emit("getOnlineUsers", Object.keys(userSocketMap));
    })
})

// Middleware setup
app.use(express.json({limit: "4mb"}));
app.use(cors());

// Routes setup
app.use("/api/status", (req, res)=> res.send("server is live"));
app.use("/api/auth", userRouter);
app.use("/api/messages", messageRouter);

// connect to MongoDB
await connectDB();


const PORT = process.env.PORT || 5000;
// Start the server
server.listen(PORT, ()=> console.log("sevrver is running on PORT: " + PORT));


// npm run server -> to start the backend server