const Estabelecimento = require('./estabelecimento');

const { Model, DataTypes } = require('sequelize');

class item extends Model {
  static init(sequelize) {
    super.init({
      nome: DataTypes.STRING,
      descricao: DataTypes.STRING,
      valor: DataTypes.DOUBLE,
      quantidade: DataTypes.INTEGER,
      estabelecimento_id: DataTypes.INTEGER
    },
      {
        sequelize
      })
  }
}

item.associate = function (models) {
  item.belongTo(Estabelecimento, { foreinKey: 'estabelecimento_id', as: 'estabelecimentos' });
}
module.exports = item;




/* const Sequelize = require('sequelize');
const Estabelecimento = require('./estabelecimento');
const db = require('../utils/connectionDB');
const Item = db.define('itens', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    FOREIGNKEYS: true
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    FOREIGNKEYS: true
  },
  descricao: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  valor: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  quantidade: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
}); */

//Estabelecimento.hasOne(Item);


/* module.exports = Item; */