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
  console.log('new browser instance connected');
  socket.on('disconnect', () => {
      console.log('browser instance disconnected');
  });
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});