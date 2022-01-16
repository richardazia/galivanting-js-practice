// Using the Socket IO library and example code from the following tutorial:
// https://socket.io/get-started/chat

const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');  
  socket.on('disconnect', () => {
    console.log('user disconnected');
    console.log('user left');
  });
  socket.on('chat message', (msg) => {
    socket.on('chat message', (msg) => {
      io.emit('chat message', msg);
  });
});

server.listen(3000, () => {
  console.log('listening on localhost:3000');
});