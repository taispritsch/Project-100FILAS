const Token = require('./token');
const Estabelecimento = require('./estabelecimento');

const { Model, DataTypes } = require('sequelize');

class log_alerta extends Model {
  static init(sequelize) {
    super.init({
      local_acessado: DataTypes.STRING,
      horario: DataTypes.DATE,
      acao: DataTypes.STRING,
      mensagem_aviso: DataTypes.STRING,
      token_id: DataTypes.INTEGER,
      estabelecimento_id: DataTypes.INTEGER
    },
      {
        sequelize
      })
  }
}

log_alerta.associate = function (models) {
  log_alerta.belongTo(Token, { foreinKey: 'token_id', as: 'tokens' });
  log_alerta.belongTo(Estabelecimento, { foreinKey: 'estabelecimento_id', as: 'estabelecimentos' });
}
module.exports = log_alerta;


/* const Sequelize = require('sequelize');
const Estabelecimento = require('./estabelecimento');
const Token = require('./token');
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

Token.hasOne(Log_alerta);

Estabelecimento.hasOne(Log_alerta);

module.exports = Log_alerta; */