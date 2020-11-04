"use strict";

const router = require("express").Router();
const message = require("../Controller/controller");

router.get("/", message.getAll);

module.exports = router;
