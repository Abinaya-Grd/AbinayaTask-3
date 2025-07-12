const socket = io();
const editor = document.getElementById('editor');

// Emit changes to server
editor.addEventListener('input', () => {
    socket.emit('contentChange', editor.value);
});

// Receive changes from server
socket.on('contentChange', (data) => {
    editor.value = data;
});
