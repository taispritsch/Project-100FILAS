const Token = require('./token');
const Estabelecimento = require('./estabelecimento');

const { Model, DataTypes } = require('sequelize');

class log_erro extends Model {
  static init(sequelize) {
    super.init({
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

log_erro.associate = function (models) {
  log_erro.belongTo(Token, { foreinKey: 'token_id', as: 'tokens' });
  log_erro.belongTo(Estabelecimento, { foreinKey: 'estabelecimento_id', as: 'estabelecimentos' });
}
module.exports = log_erro;


/* const Sequelize = require('sequelize');
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

module.exports = Log_erro; */