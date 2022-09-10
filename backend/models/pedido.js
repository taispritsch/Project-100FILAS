const Item = require('./item');
const { Model, DataTypes } = require('sequelize');

class pedido extends Model {
  static init(sequelize) {
    super.init({
      observacao: DataTypes.STRING,
      quantidade_item: DataTypes.INTEGER,
      valor_total: DataTypes.DOUBLE,
      item_id: DataTypes.INTEGER
    },
      {
        sequelize
      })
  }
}

pedido.associate = function (models) {
  pedido.belongTo(Item, { foreinKey: 'item_id', as: 'items' });
}

module.exports = pedido;
