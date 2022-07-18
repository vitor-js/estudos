// Packages
const express = require("express");
const routes = express.Router();

// Middlewares
const { accountSignUp } = require("../middlewares/account");
const { checkJwt } = require("../middlewares/auth");

// Controllers
const userController = require("../controllers/http/userController");
const authController = require("../controllers/http/authController");
const getDataController = require("../controllers/http/dataController");

routes.post("/create", accountSignUp, userController.createUser);
routes.post("/login", authController.login);
routes.get("/", checkJwt, getDataController.getData);

module.exports = routes;
