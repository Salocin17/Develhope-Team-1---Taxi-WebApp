const express = require("express");
const { Server } = require("socket.io");
const http = require("http");
const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});



io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);
  socket.on("join_room", (data) => {
    socket.join(data.id);
  });

  socket.on("send_message", (data) => {
    socket.to(data.id).emit("receive_message", data.json.request);
  })

  socket.on('unsubscribe', function(room){  
    socket.leave(room);
  })

  socket.on("send_id", (data) => {
    // console.log( data.data._id)
    socket.to(data.room).emit("receive", data);
  });
});
  


module.exports = {
  io,
  server,
  app
} 
