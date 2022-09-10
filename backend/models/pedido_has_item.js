const Pedido = require('./pedido');
const Item = require('./item');

const { Model, DataTypes } = require('sequelize');

class pedido_has_item extends Model {
  static init(sequelize) {
    super.init({
      pedido_id: DataTypes.INTEGER,
      item_id: DataTypes.INTEGER
    },
      {
        sequelize
      })
  }
}

pedido_has_item.associate = function (models) {
  pedido_has_item.belongTo(Pedido, { foreinKey: 'pedido_id', as: 'pedidos' });
  pedido_has_item.belongTo(Item, { foreinKey: 'item_id', as: 'items' });
}

module.exports = pedido_has_item;
