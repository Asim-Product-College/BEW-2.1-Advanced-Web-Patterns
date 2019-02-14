## Notes

Client establishes a WebSocket connection through a process known as the WebSocket handshake.
The process:
    - Client establishes a WebSocket connection through a process known as the WebSocket handshake.
        - An `Upgrade` header is included in this request that informs the server that the client wishes to establish a WebSocket connection.

Here is a simplified example of the initial request headers.
```
GET ws://websocket.example.com/ HTTP/1.1
Origin: http://example.com
Connection: Upgrade
Host: websocket.example.com
Upgrade: websocket
```

*Note:* WebSocket URLs use the `ws` scheme. There is also `wss` for secure WebSocket connections which is the equivalent of `HTTPS`

If the server supports the WebSocket protocol, it agrees to the upgrade and communicates this through an `Upgrade` header in the response..

```
HTTP/1.1 101 WebSocket Protocol Handshake
Date: Wed, 16 Oct 2013 10:07:34 GMT
Connection: Upgrade
Upgrade: WebSocket
```

Now that the handshake is complete the initial HTTP connection is replaced by a WebSocket connection that uses the same underlying TCP/IP connection. At this point either party can starting sending data.

Pros here:
- With WebSockets you can transfer as much data as you like without incurring the overhead associated with traditional HTTP requests.
- Data is transferred through a WebSocket as messages, each of which consists of one or more frames containing the data you are sending (the payload). In order to ensure the message can be properly reconstructed when it reaches the client each frame is prefixed with 4-12 bytes of data about the payload. Using this frame-based messaging system helps to reduce the amount of non-payload data that is transferred, leading to significant reductions in latency.

*Note:* It’s worth noting that the client will only be notified about a new message once all of the frames have been received and the original message payload has been reconstructed.

*WebSockets enable the server and client to send messages to each other at any time*, after a connection is established, without an explicit request by one or the other. This is in contrast to HTTP, which is traditionally associated with the challenge-response principle — where to get data one has to explicitly request it. In more technical terms, WebSockets enable a full-duplex connection between the client and the server.

In a challenge-response system there is no way for clients to know when new data is available for them (except by asking the server periodically —polling or long polling), *with Websockets the server can push new data at any time which makes them the better candidate for “real-time” applications.*

*It’s important to note that WebSockets convert their HTTP connection to a WebSocket connection.* In other words, a WebSocket connection uses HTTP only to do the initial handshake (for authorization and authentification), after which the TCP connection is utilized to send data via the its own protocol (hybd).

![](/GIFs/websocket.gif)

## Emitting events
The main idea behind Socket.IO is that you can send and receive any events you want, with any data you want.
Any objects that can be encoded as JSON will do, and binary data is supported too.