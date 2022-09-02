const Sequelize = require('sequelize');
const Estabelecimento = require('./estabelecimento');
//const Token = require('./token');
const db = require('../utils/connectionDB');
const Log_acesso = db.define('log_acessos', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    local_acessado: {
        type: Sequelize.STRING,
        allowNull: false,
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

//Token.hasOne(Log_acesso);

Estabelecimento.hasOne(Log_acesso);

module.exports = Log_acesso;