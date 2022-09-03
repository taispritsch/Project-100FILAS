const Sequelize = require('sequelize');
const Pedido = require('./pedido');
const Item = require('./item');
const db = require('../utils/connectionDB');
const Pedido_has_item = db.define('pedido_has_itens', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
});

Pedido.hasOne(Pedido_has_item);
Item.hasOne(Pedido_has_item);


module.exports = Pedido_has_item;