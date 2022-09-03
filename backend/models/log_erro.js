const Sequelize = require('sequelize');
const db = require('../utils/connectionDB');
const Estabelecimento = require('./estabelecimento');
const Token = require('./token');
const Log_erro = db.define('log_erros', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    horario: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    acao: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

Estabelecimento.hasOne(Log_erro);
Token.hasOne(Log_erro);

module.exports = Log_erro;