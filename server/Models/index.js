"use strict";

const mongoose = require("mongoose");
mongoose.Promise = require("bluebird");
const conf = require("../config");

mongoose.connect(process.eventNames.MONGODB_URI || `mongodb://localhost:27017/${conf.dbName}`, {
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
