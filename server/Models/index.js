"use strict";

const mongoose = require("mongoose");
mongoose.Promise = require("bluebird");
const conf = require("../config");
const uri = "mongodb+srv://dbUser:N2FS07XlSFSQWT0P@cluster0.jvlri.mongodb.net/CalcDB?retryWrites=true&w=majority"

mongoose.connect(uri || `mongodb://localhost:27017/${conf.dbName}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
// eslint-disable-next-line no-console
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  // eslint-disable-next-line no-console
  console.log("Connected to db");
});

module.exports = mongoose;
