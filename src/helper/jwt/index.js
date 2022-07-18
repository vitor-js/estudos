require("dotenv").config();
const jwt = require("jsonwebtoken");

const tokenPivateKey = process.env.JWT_TOKEN_PRIVETE_KEY;
const tokenRefreshKey = process.env.JWT_TOKEN_REFRESH_KEY;

const options = {
  expiresIn: "30 minutes",
};

const refreshOptions = {
  expiresIn: "30 days",
};

const generateJwt = (paylod) => {
  return jwt.sign(paylod, tokenPivateKey, options);
};

const generateRefreshJwt = (paylod) => {
  return jwt.sign(paylod, tokenPivateKey, refreshOptions);
};

const verifyJwt = (token) => {
  return jwt.verify(token, tokenPivateKey);
};

const verifyRefreshJwt = (token) => {
  return jwt.verify(token, tokenRefreshKey);
};

module.exports = {
  generateJwt,
  generateRefreshJwt,
  verifyJwt,
  verifyRefreshJwt,
};
