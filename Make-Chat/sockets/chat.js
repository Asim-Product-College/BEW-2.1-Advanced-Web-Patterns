//chat.js
module.exports = (io, socket) => {
    //Future socket listeners will be here
    // Listen for "new user" socket emits
    // add a matching socket listener on the backend that listens for an event called new user.
    socket.on('new user', (username) => {
        console.log(`${username} has joined the chat! ✋`);        
    });
    // Now whenever the client emits a "new user" request, our server will be on it.
}