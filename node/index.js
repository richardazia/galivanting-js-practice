// Using the Socket IO library and example code from the following tutorial:
// https://socket.io/get-started/chat

const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  socket.on('chat message', msg => {
    io.emit('chat message', msg);
  });
});

http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});

// Homework#
// Here are some ideas to improve the application:

// Broadcast a message to connected users when someone connects or disconnects.

// Add support for nicknames.

// Don’t send the same message to the user that sent it. Instead, append the message directly as soon as he/she presses enter.
// Add “{user} is typing” functionality.

// Show who’s online.

// Add private messaging.

// Share your improvements!