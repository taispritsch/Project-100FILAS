
const Sequelize = require('sequelize');
const db = require('../utils/connectionDB');
const Token = require('./token');
//const Pedido = require('./pedido');
const Log_pedido = db.define('log_pedidos', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
});

//Pedido.hasOne(Log_pedido);
Token.hasOne(Log_pedido);

module.exports = Log_pedido;