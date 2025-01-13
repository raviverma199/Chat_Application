import { Server } from "socket.io";
import http from "http";
import express from "express";
const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

export const getReceiverSocketId = (receiverId) =>{
  return socketUsermap[receiverId]; 
}

const socketUsermap = {};
io.on("connection", (socket) => {
  const userId = socket.handshake.query.userId;
  if (userId !== "undefined") {
    socketUsermap[userId] = socket.id;
  }

  // io.emit is used to send the events to all the user
  io.emit("getOnlineUsers", Object.keys(socketUsermap));

  socket.on("disconnect", () => {
    delete socketUsermap[userId];
    io.emit("getOnlineUsers", Object.keys(socketUsermap));
  });
});

export { app, io, server };
