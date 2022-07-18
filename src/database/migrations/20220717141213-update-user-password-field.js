module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.changeColumn("users", "password", {
        type: Sequelize.STRING(200),
        allowNull: false,
      }),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.changeColumn("users", "password", {
        type: Sequelize.STRING(50),
        allowNull: false,
      }),
    ]);
  },
};
