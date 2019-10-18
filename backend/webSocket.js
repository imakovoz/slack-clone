const mongoose = require("mongoose");
const express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const Message = require("./models/message");

const webSocketServer = require("websocket").server;
const http = require("http");

// http://ejohn.org/blog/ecmascript-5-strict-mode-json-and-more/
("use strict");

const dbRoute = `mongodb+srv://test:testthisroot@cluster0-0j27x.mongodb.net/test?retryWrites=true&w=majority`;

// connects our back end code with the database
mongoose.connect(dbRoute, { useNewUrlParser: true });

let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));

// checks if connection with the database is successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// Optional. You will see this name in eg. 'ps' or 'top' command
process.title = "node-chat";

// Port where we'll run the websocket server
var webSocketsServerPort = 1337;

// websocket and http servers

/**
 * Global variables
 */
// latest 100 messages
var history = [];
// list of currently connected clients (users)
var clients = [];

/**
 * HTTP server
 */
var server = http.createServer(function(request, response) {
  // Not important for us. We're writing WebSocket server, not HTTP server
});
server.listen(webSocketsServerPort, function() {
  console.log(
    new Date() + " Server is listening on port " + webSocketsServerPort
  );
});

/**
 * WebSocket server
 */
var wsServer = new webSocketServer({
  // WebSocket server is tied to a HTTP server. WebSocket request is just
  // an enhanced HTTP request. For more info http://tools.ietf.org/html/rfc6455#page-6
  httpServer: server
});

// This callback function is called every time someone
// tries to connect to the WebSocket server
wsServer.on("request", function(request) {
  console.log(new Date() + " Connection from origin " + request.origin + ".");

  // accept connection - you should check 'request.origin' to make sure that
  // client is connecting from your website
  // (http://en.wikipedia.org/wiki/Same_origin_policy)
  var connection = request.accept(null, request.origin);
  var index = clients.push(connection) - 1;
  Message.find({}, (err, res) => {
    console.log(res);
    var json = JSON.stringify({ type: "message", data: res });

    clients[index].sendUTF(json);
  });
  console.log(new Date() + " Connection accepted.");

  // user sent some message
  connection.on("message", function(message) {
    message = JSON.parse(message.utf8Data);
    var { currentUser, text } = message;

    if (message.route === "message") {
      let msg = new Message();
      msg.message = text;
      msg.sender_id = currentUser._id;
      msg.save((err1, res1) => {
        Message.find({}, (err, res) => {
          console.log(res);
          var json = JSON.stringify({ type: "message", data: res });
          for (var i = 0; i < clients.length; i++) {
            clients[i].sendUTF(json);
          }
        });
      });
    }
  });

  // user disconnected
  connection.on("close", function(connection) {
    clients.splice(index, 1);
    console.log(
      new Date() + " Peer " + connection.remoteAddress + " disconnected."
    );
  });
});
