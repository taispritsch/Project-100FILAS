const Sequelize = require('sequelize');
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
});

Estabelecimento.hasOne(Item);


module.exports = Item;