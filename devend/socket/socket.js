const express = require("express");
const http = require("http");
const { Server } = require("socket.io");


const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["https://devchat-frontend-reactjs-6.onrender.com"],
    methods: ["GET", "POST"],
  },
});

const userSocket = {}; //{userId:socketId}

 const getReceiverId = (receiverId) => {
  console.log('so',userSocket);
  return userSocket[receiverId];
};

io.on("connection", (socket) => {
  console.log("A user connected", socket.id);
  const userId = socket.handshake.query.userId;
  console.log('hand',socket.handshake);
  console.log('uid',userId);
  if (userId != "undefined") userSocket[userId] = socket.id;
console.log('userso',userSocket);
  io.emit("getOnlineUsers", Object.keys(userSocket));
  socket.on("disconnect", () => {
    console.log("A user disconnected", socket.id);
    delete userSocket[userId];
    io.emit("getOnlineUsers", Object.keys(userSocket));
  });
});

module.exports = { getReceiverId, app, io, server };
