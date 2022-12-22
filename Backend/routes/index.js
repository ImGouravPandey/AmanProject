const express = require("express");
const routes = express.Router();
const {
  addUser,
  allUser,
} = require("../controller/user.controller");

routes.post("/add", addUser);

routes.get("/all-user",allUser);

module.exports = { routes };
