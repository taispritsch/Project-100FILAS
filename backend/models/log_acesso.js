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
