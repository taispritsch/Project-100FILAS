const Sequelize = require('sequelize');
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

module.exports = Pedido;