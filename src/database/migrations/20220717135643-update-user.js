module.exports = {
  up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        "user", // table name
        "updated_at", // new field name
        {
          type: Sequelize.DATE,
          allowNull: false,
        }
      ),
      queryInterface.addColumn(
        "user", // table name
        "created_at", // new field name
        {
          type: Sequelize.DATE,
          allowNull: false,
        }
      ),
    ]);
  },

  down(queryInterface, Sequelize) {
    // logic for reverting the changes
    return Promise.all([
      queryInterface.removeColumn("user", "created_at"),
      queryInterface.removeColumn("user", "updated_at"),
    ]);
  },
};
