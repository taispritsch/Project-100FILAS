const Pedido = require('./pedido');
const Token = require('./token');

const { Model, DataTypes } = require('sequelize');

class log_pedido extends Model {
  static init(sequelize) {
    super.init({
      pedido_id: DataTypes.INTEGER,
      token_id: DataTypes.INTEGER
    },
      {
        sequelize
      })
  }
}

log_pedido.associate = function (models) {
  log_pedido.belongTo(Pedido, { foreinKey: 'pedido_id', as: 'pedidos' });
  log_pedido.belongTo(Token, { foreinKey: 'token_id', as: 'tokens' });
}

module.exports = log_pedido;
