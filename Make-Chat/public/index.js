$(document).ready( () => {
    const socket = io.connect(); //Connect to the socket.io server
    let currentUser; // Keep track of current user
    socket.emit('get online users'); // Get the online users from the server
    
    socket.on('get online users', (onlineUsers) => {
        //You may have not have seen this for loop before. It's syntax is for(key in obj)
        //Our usernames are keys in the object of onlineUsers.
        for(username in onlineUsers){
            $('.usersOnline').append(`<p class="userOnline">${username}</p>`);
        }
    }); // Get the online users from the server
    $('#createUserBtn').click((e) => {
        e.preventDefault();
        let username = $('#usernameInput').val();
        if (username.length > 0) {
            // Emit to the server a new user. 
            // This code emits to the server the new username. 
            // socket.emit sends data to the client that sent the original data to the server.            
            socket.emit('new user', username); // Emit allows for registering custom events.
            currentUser = username;
            $('.usernameForm').remove();
            $('.mainContainer').css('display', 'flex'); // Have the main page visible
        }
    });

    $('#sendChatBtn').click((e) => {
        e.preventDefault();
        let message = $('#chatInput').val(); // get the msg txt val
        if (message.length > 0) {
            // you can emit multiple pieces of data.
            // Emit the message with the current user to the server
            socket.emit('new message', {
                sender : currentUser,
                message : message,
            });
            $('#chatInput').val("");
        }        
    });
    // socket listeners
    socket.on('new user', (username) => {
        console.log(`✋ ${username} has joined the chat! ✋`);
        // Add the new user to the online users div
        $('.usersOnline').append(`<div class="userOnline">${username}</div>`);
    });
    // Now both your server and clients will be logging in the new users.

    socket.on('new message', (data) => {
        $('.messageContainer').append(`
            <div class="message">
                <p class="messageUser">${data.sender}: </p>
                <p class="messageText">${data.message}</p>
            </div> 
        `);
    });

    //Refresh the online user list
    socket.on('user has left', (onlineUsers) => {
        $('.usersOnline').empty();
        for(username in onlineUsers){
            $('.usersOnline').append(`<p>${username}</p>`);
        }
    });
})