What is socket.io?
- used to make real-time chat apps.
- web sockets are built into javascript, but not always available
	- socket.io is.
- when you need a chat app, you grab socket.io
- uses TCP

What are web sockets?

What is TCP? (underlying networking protocol)

Goals with the Chat App
- omi
- on
- setup

## 1. bi-directional

#### HTTP
we start with a client using javascript
when we need data, we make an HTTP request.
server lists a port and does something with the request
the server responds to the client
it then terminates the connect
HTTP is stateless meaning it does not maintain memory or a log or state.
only knows requests and responses
the connection is made, fulfilled, terminated

#### TCP
we take a client using javascript
it opens a connection
it uses TCP not HTTP
the connection remains open
it is a stateful connection (it remembers)
can keep an ID for the session
it stays open until it is deliberately closed
it is like a phone call. you talk and then there's a hang up

HTTP is request response
TPC can go back and forth

## 2. low latency
Low overhead
Real-time
we can use long poling to get good results with httpa
## 3. every platform


### What are web sockets?
it allows us to open a two-way interaction between clients and servers that uses TCP

Socket.io <- server
WebSockets <- client/browser (a javascript thing)

Long polling
you send the request until one side has something to say
if and when it has something to say, it sends the response and immediately checks for another request
lots of overhead
timed out
needed when WebSockets had poor support

## Socket IO
Socket.io uses
1. web sockets
2. long polling
3. multiplexing (lets us use namespaces or rooms)

You might need more than one connection

You can use the same connection to manage more than one room (ie admin and general)

you do not need 1000 phone lines for 1000 phone calls

heartbeat <- checks to see if the other connection is still there
has a reconnection feature if no heartbeat detected

packet buffering
- if the connection is lost. whatever side is sending data, the data will be held in a queue until the connection is re-established

Socket.io is like WebSockets on steroids

SOCKET.IO IS NOT A WEB SOCKET IMPLEMENTATION

