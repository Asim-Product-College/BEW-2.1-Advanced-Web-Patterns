//chat.js
module.exports = (io, socket, onlineUsers) => {
    //Future socket listeners will be here
    // Listen for "new user" socket emits
    // add a matching socket listener on the backend that listens for an event called new user.
    socket.on('new user', (username) => {
        //Save the username as key to access the user's socket id
        onlineUsers[username] = socket.id;
        //Save the username to socket as well. This is important for later.
        socket["username"] = username;
        console.log(`${username} has joined the chat! ✋`); 
        io.emit("new user", username); //Send username to all clients currently connected
    });
    // Notice how the server says io.emit instead of socket.emit.
    // `io.emit` sends data to all clients on the connection.
    // socket.emit sends data to the client that sent the original data to the server.
    // Now whenever the client emits a "new user" request, our server will be on it.
    
    // Listen for new msgs
    socket.on('new message', (data) => {
        // Send that data back to ALL clients
        console.log(`🎤 ${data.sender}: ${data.message} 🎤`)
        io.emit('new message', data); // Notice how we can access the data sent like an object.
    })

    socket.on('get online users', () => { // Send the online users when someone connects.
        socket.emit('get online users', onlineUsers); //Send over the onlineUsers
    });

    //This fires when a user closes out of the application
    socket.on('disconnect', () => {
        //This deletes the user by using the username we saved to the socket
        delete onlineUsers[socket.username]
        io.emit('user has left', onlineUsers);
    });
}