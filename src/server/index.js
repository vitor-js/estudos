require("dotenv/config");
require("../database/index");
const express = require("express");
const routes = require("../routes");

// Middleware
const response = require("../middlewares/response");

const app = express();

app.use(response);

app.use(express.json());
app.use(routes);

app.listen(9999, () => {
  console.log("http://localhost:9999/");
});
