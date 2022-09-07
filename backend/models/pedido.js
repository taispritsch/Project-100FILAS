const Item = require('./item');
const {Model, DataTypes} = require('sequelize');

class pedido extends Model {
  static init(sequelize) {
    super.init({
      nome: DataTypes.STRING,
      observacao: DataTypes.STRING,
      quantidade_item: DataTypes.INTEGER,
      valor_total: DataTypes.DOUBLE,
      item_id: DataTypes.INTEGER,
      item_nome: DataTypes.STRING
    },
    {
      sequelize
    })
  }
}

pedido.associate = function (models) {
  pedido.belongTo(Item, {foreinKey: 'item_id', as: 'items'});
  pedido.belongTo(Item, {foreinKey: 'item_nome', as: 'items'});
}
module.exports = pedido;


/* const Sequelize = require('sequelize');
const db = require('../utils/connectionDB');
const Item = require('./item');
const Pedido = db.define('pedidos', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    FOREIGNKEYS: true
  },
  observacao: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  quantidade_item: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  valor_total: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
});

Item.hasMany(Pedido);

module.exports = Pedido; */