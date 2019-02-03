//chat.js
module.exports = (io, socket, onlineUsers, channels) => {
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

    socket.on('new channel', (newChannel) => {
        //Save the new channel to our channels object. The array will hold the messages.
        channels[newChannel] = [];
        //Have the socket join the new channel room. That's interesting.
        socket.join(newChannel);
        //Inform all clients of the new channel.
        io.emit('new channel', newChannel); // telling the socket to join the new channel room.
        //Emit to the client that made the new channel, to change their channel to the one they made.
        socket.emit('user changed channel', {
          channel : newChannel,
          messages : channels[newChannel]
        });
      })

    //This fires when a user closes out of the application
    socket.on('disconnect', () => {
        //This deletes the user by using the username we saved to the socket
        delete onlineUsers[socket.username]
        io.emit('user has left', onlineUsers);
    });
}