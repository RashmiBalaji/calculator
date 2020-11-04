"use strict";
const mongoose = require("./index");

const Schema = mongoose.Schema;

const eventSchema = new Schema({
  resultString: { type: String, require: true },
});

const InputCalculation = mongoose.model("Calculation", eventSchema);

module.exports = InputCalculation;
