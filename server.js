const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static('public'));

io.on('connection', (socket) => {
    console.log('A user connected');

    // Listen for changes from one client and broadcast to others
    socket.on('contentChange', (data) => {
        socket.broadcast.emit('contentChange', data);
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

http.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
