const { Model, DataTypes } = require('sequelize');

class token extends Model {
  static init(sequelize) {
    super.init({
      localizacao: DataTypes.STRING,
    },
      {
        sequelize
      })
  }
}

module.exports = token;
