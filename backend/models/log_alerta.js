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
