const express = require("express");
const app = express();
const cors = require("cors");
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const router = require("./Router/router");
const models = require("./Models/models");

app.use(cors());
app.use(express.json());
app.use(router);
//Setting up a socket with the namespace "connection" for new sockets
io.on("connection", (socket) => {
  console.log("New client connected");

  //to listen on a new namespace called "send calc"
  socket.on("send calc", (data) => {
    //to save the incoming data on db
    var operationItem = new models({ resultString: data });

    operationItem.save(function (err, doc) {
      if (err) return console.error(err);
      console.log("Document inserted sucessfully");
    });

    //to find recent ten entries from db and to broadcast it to all sockets
    setTimeout(function () {
      models
        .find()
        .sort({ _id: -1 })
        .limit(20)
        .then((doc) => {
          io.emit("send calc", doc);
        });
    }, 1000);

    //A namespace "disconnect" for when a client disconnects
    socket.on("disconnect", () => {
      console.log("Client disconnected");
      socket.removeAllListeners();
    });
  });

  server.listen(3001, function (err) {
    if (err) throw err;
    console.log("listening on port 3001");
  });
});
