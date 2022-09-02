const Sequelize = require('sequelize');
const Estabelecimento = require('./estabelecimento');
//const Token = require('./token');
const db = require('../utils/connectionDB');
const Log_alerta = db.define('log_alertas', {
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
  mensagem_aviso: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

//Token.hasOne(Log_alerta);

Estabelecimento.hasOne(Log_alerta);

module.exports = Log_alerta;