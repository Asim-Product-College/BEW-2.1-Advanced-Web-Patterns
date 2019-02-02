$(document).ready( () => {
    const socket = io.connect(); //Connect to the socket.io server
    $('#createUserBtn').click((e) => {
        e.preventDefault();
        let username = $('#usernameInput').val();
        if (username.length > 0) {
            // Emit to the server a new user. 
            // This code emits to the server the new username. 
            // socket.emit sends data to the client that sent the original data to the server.            
            socket.emit('new user', username); // Emit allows for registering custom events.
            $('.usernameForm').remove();
        }
    });

    // socket listeners
    socket.on('new user', (username) => {
        console.log(`✋ ${username} has joined the chat! ✋`);
    });
    // Now both your server and clients will be logging in the new users.
})