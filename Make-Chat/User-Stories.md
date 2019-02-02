## User Stories
Upon entering the application, I can choose a username to go by.
I can enter a message that shows up on all clients.
I can join / create chat channels.
I will never have to refresh the page to receive new messages.
I can start a private message with another user. (Stretch Challenge)

## Wireframe
Let's look at a simple wireframe of what we want to build. Basically it is a chat application with very little underutilized space.

Visual - https://cdn.jsdelivr.net/gh/MakeSchool-Tutorials/Make-Chat-Tutorial@master/P00-Start-Slacking/make-chat-wireframe.png

And it certainly would be next to impossible... if it weren't for a little library called socket.io!

Socket.io is a lightweight wrapper you can use to implement websockets using the WebSocket standard.

Remember that Socket.io has both a server and a client side to handle both the sending and receiving of websocket messages.

Some types of applications that use socket.io are the following:

1. Live Messaging / Chat Rooms
2. Realtime Data Analytics
3. Multiplayer Games such as Agar.io or Slither.io
4. Applications you make after this tutorial (hopefully)