## HTML5 BIDIRECTIONAL COMMUNICATION => WEBSOCKET
Before we jump into building with websockets, lets take a second to look at where the WebSocket standard came from and how it works. Much of this complexity is buried into the libraries and tools we use, so lets take a minute to look at them.

As HTML5 was being developed, it became clear that the web needed a bidirectional full-duplex standard to allow for bidirectional communication. A new standard called WebSocket was recommended in June of 2008 by Michael Carter—an influential HTML5 game developer.

In February 2010, Google (being a champion of HTML5) made Chrome 4 the first browser to ship a full support of the standard and enabled by default with Safari 5.0.0 in a close second. The last was Internet Explorer 10 in December 2011.

The WebSocket standard begins with an HTTP handshake, but then switches to the WebSocket standard that does not conform to the HTTP protocol.

Visual - https://cdn.jsdelivr.net/gh/MakeSchool-Tutorials/Make-Chat-Tutorial@master/P00-Start-Slacking/WebSockets-Diagram.png

Here's an example of how the request for the handshake and the server's response looks:
```
GET /chat HTTP/1.1
Host: server.example.com
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: x3JJHMbDL1EzLkh9GBhXDw==
Sec-WebSocket-Protocol: chat, superchat
Sec-WebSocket-Version: 13
Origin: http://example.com
Server response:
```
```

HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: HSmrc0sMlYUkAGmm5OPpG2HaGWk=
Sec-WebSocket-Protocol: chat
```

The request sends a `Sec-WebSocket-Key` which contains base64-encoded random bytes, and response responds with with a hash of the key in the `Sec-WebSocket-Accept` attribute which prevents resending old messages. This key/hash pattern does not provide any authentication, privacy, or integrity. WebSocket has unique security and privacy concerns.

More info - https://hpbn.co/websocket/


## Connection Inspection 🧐
<!-- The socket.io npm module automatically sets up a /socket.io/socket.io.js path in your project to the socket.io frontend JavaScript. So we can update our handlebars to require the client-side socket.io script. -->

## Giving users an identity

Let's make a separate file for our socket listeners.  This will reduce the socket clutter in our `server.js`

## SUBMITTING THE FORM VIA WEBSOCKET
Let's add some client script to send the new username to the server.

We are not going to use an HTTP request, instead we can use a socket event on the connection we already have created! 

We'll create a new event called `new user`. On the server we'll later create a listener to listen for events named this.

## WHAT GOES AROUND, COMES AROUND

We have successfully sent data from the client to the server with sockets.

Now let's send data from the server to all clients. The server can emit as well.

There's some more ways to emit data that we'll go in to later. These two are the most common.

Now we have to setup the client to listen for any `new user` events coming from the server. we'll use the same sort of lingo: on (listening) "new user".

Now both your server and clients will be logging in the new users.

To simulate two connections, open up two browser windows and direct them both to http://localhost:3000/, create different users on each, and check both browser window's JavaScript consoles.

## LET'S SEND SOME MESSAGES

## GREAT, WE HAVE USERS AND CHAT! WE'RE FINISHED RIGHT?

If you were to reload or create a new instance in another tab, you will see that the online users and messages don't save.

This is because our application is currently only showing new data coming in. There is no system in place to show old data.

Also we don't even have different channels. How boring is that?

Let's move on!

## BE A VILLAIN AND DESTROY THESE USERS!
When a user closes out of the browser window, we want to get rid of them from our onlineUsers.

`socket.on("disconnect")` is a special listener that fires when a user exits out of the application

Now update the client to refresh its online users when a "user has left".

