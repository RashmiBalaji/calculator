require('dotenv').config()
const express = require("express");
const app = express();
const cors = require("cors");
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const router = require("./Router/router");
const models = require("./Models/models");
const PORT = process.env.PORT || 3001;
const path = require('path');

app.use(cors());
app.use(express.json());
app.use(router);


//for rendering the files under build folder for production after deployment
if(process.env.NODE_ENV === 'production') {
  app.use(express.static('../../client/build'));

  app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}

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
        .limit(10)
        .then((doc) => {
          io.emit("send calc", doc);
        });
    }, 500);

    //A namespace "disconnect" for when a client disconnects
    socket.on("disconnect", () => {
      console.log("Client disconnected");
      socket.removeAllListeners();
    });
  });
});

server.listen(PORT, function (err) {
  if (err) throw err;
  console.log(`Server listening on ${PORT} 🚀`);
});
