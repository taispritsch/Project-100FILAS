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
