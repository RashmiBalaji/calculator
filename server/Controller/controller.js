"use strict";

const model = require("../Models/models");

async function getAll(req, res) {
  try {
    const msgs = await model.find().sort({ _id: -1 }).limit(10);
    res.status(200);
    res.send(msgs);
  } catch (e) {
    console.log("Error", e); //eslint-disable-line no-console
    res.sendStatus(500);
  }
}

module.exports = {
  getAll,
};
