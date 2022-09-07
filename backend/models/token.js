const {Model, DataTypes} = require('sequelize');

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




/* const Sequelize = require('sequelize');
const db = require('../utils/connectionDB');
const Token = db.define('tokens', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        FOREIGNKEYS: true
    },
    localizacao: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

module.exports = Token; */