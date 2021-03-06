const { Model, DataTypes } = require("sequelize");

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        tax_id: DataTypes.STRING,
      },
      {
        sequelize,
        freezeTableName: false,
      }
    );
  }

  static associate(models) {}
}

module.exports = User;
