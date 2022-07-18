module.exports = {
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "postgres",
  database: "study",
  define: {
    timeistamps: true,
    underscored: true,
    underscoredAll: true,
    freezeTableName: true,
  },
};
