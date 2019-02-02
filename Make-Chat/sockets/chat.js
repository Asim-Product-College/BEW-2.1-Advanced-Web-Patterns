//chat.js
module.exports = (io, socket) => {
    //Future socket listeners will be here
    // Listen for "new user" socket emits
    // add a matching socket listener on the backend that listens for an event called new user.
    socket.on('new user', (username) => {
        console.log(`${username} has joined the chat! ✋`); 
        io.emit("new user", username); //Send username to all clients currently connected
    });
    // Notice how the server says io.emit instead of socket.emit.
    // `io.emit` sends data to all clients on the connection.
    // socket.emit sends data to the client that sent the original data to the server.
    // Now whenever the client emits a "new user" request, our server will be on it.
}