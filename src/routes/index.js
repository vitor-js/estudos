// Packages
const express = require("express");
const routes = express.Router();

// Controllers
const userController = require("../controllers/http/userController");

routes.get("/", userController.get);

module.exports = routes;
