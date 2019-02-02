$(document).ready( () => {
    const socket = io.connect(); //Connect to the socket.io server
    $('#createUserBtn').click((e) => {
        e.preventDefault();
        let username = $('#usernameInput').val();
        if (username.length > 0) {
            // Emit to the server a new user. 
            // This code emits to the server the new username. 
            socket.emit('new user', username); // Emit allows for registering custom events.
            $('.usernameForm').remove();
        }
    });
})