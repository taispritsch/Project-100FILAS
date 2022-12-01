const Item = require('./item');
const { Model, DataTypes } = require('sequelize');
const Estabelecimento = require('./estabelecimento');

class pedido extends Model {
  static init(sequelize) {
    super.init({
      observacao: DataTypes.STRING,
      quantidade_item: DataTypes.INTEGER,
      valor_total: DataTypes.DOUBLE,
      item_id: DataTypes.INTEGER,
      nome_cliente: DataTypes.STRING,
      numero_pedido: DataTypes.STRING,
      estabelecimento_id: DataTypes.INTEGER
    },
      {
        sequelize
      })
  }
}

pedido.associate = function (models) {
  pedido.belongTo(Item, { foreinKey: 'item_id', as: 'items' });
  pedido.belongTo(Estabelecimento, { foreinKey: 'estabelecimento_id', as: 'estabelecimentos' });
}

module.exports = pedido;
