const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const User = require("../api/user/model");

const connection = new Sequelize(dbConfig);

User.init(connection);
User.associate(connection.models);

module.exports = connection;
