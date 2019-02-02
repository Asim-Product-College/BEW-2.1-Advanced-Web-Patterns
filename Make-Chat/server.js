//Server.js
const express = require('express');
const app = express();
//Socket.io has to use the http server
const server = require('http').Server(app);

//Socket.io - successfully set up backend for incoming socket connections! 🔥
// Currently, server.js is listening for any incoming socket connections from the client.
const io = require('socket.io')(server); // //Connect to the io(server)
io.on("connection", (socket) => { // special listener that fires whenever a new client connects.
// for example, in a chat room application, you could message everyone that a new user joined the chat room when this event fires.
    console.log("🔌 New user connected! 🔌"); // Do something when a new socket(client) connection is formed, in this case, log.
    require('./sockets/chat.js')(io, socket); // This file will be read on new socket connections
});

//Express View Engine for Handlebars
const exphbs  = require('express-handlebars');
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
//Establish public folder
app.use('/public', express.static('public'))

app.get('/', (req, res) => {
  res.render('index.handlebars');
})

server.listen('3000', () => {
  console.log('Server listening on Port 3000');
})