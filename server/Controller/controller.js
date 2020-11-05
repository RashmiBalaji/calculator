"use strict";

const model = require("../Models/models");

async function getAll(req, res) {
  try {
    const msgs = await model.find().sort({ _id: -1 }).limit(20);
    console.log(msgs);
    console.log(
      "within get code of controller for intital render on connection"
    );
    res.status(200);
    res.send(msgs);
  } catch (e) {
    console.log("Error", e); //eslint-disable-line no-console
    res.sendStatus(500);
  }
}

module.exports = {
  getAll
};
