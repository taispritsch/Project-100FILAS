const Token = require('./token');
const Estabelecimento = require('./estabelecimento');

const { Model, DataTypes } = require('sequelize');

class log_acesso extends Model {
  static init(sequelize) {
    super.init({
      local_acessado: DataTypes.STRING,
      horario: DataTypes.DATE,
      acao: DataTypes.STRING,
      token_id: DataTypes.INTEGER,
      estabelecimento_id: DataTypes.INTEGER
    },
      {
        sequelize
      })
  }
}

log_acesso.associate = function (models) {
  log_acesso.belongTo(Token, { foreinKey: 'token_id', as: 'tokens' });
  log_acesso.belongTo(Estabelecimento, { foreinKey: 'estabelecimento_id', as: 'estabelecimentos' });
}
module.exports = log_acesso;



/* const Sequelize = require('sequelize');
const Estabelecimento = require('./estabelecimento');
const Token = require('./token');
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

Token.hasOne(Log_acesso);

Estabelecimento.hasOne(Log_acesso);

module.exports = Log_acesso; */