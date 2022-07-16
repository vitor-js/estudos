// Packages
const express = require("express");
const routes = express.Router();

const { accountSignUp } = require("../middlewares/account");

// Controllers
const userController = require("../controllers/http/userController");

routes.post("/", accountSignUp, userController.get);

module.exports = routes;
