// Using the Socket IO library and example code from the following tutorial:
// https://socket.io/get-started/chat

const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});


server.listen(3000, () => {
  console.log('listening on *:3000');
});