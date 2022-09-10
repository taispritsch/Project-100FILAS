const { Model, DataTypes } = require('sequelize');

class estabelecimento extends Model {
  static init(sequelize) {
    super.init({
      nome: DataTypes.STRING,
      senha: DataTypes.STRING,
      descricao: DataTypes.STRING,
      email: DataTypes.STRING,
      telefone: DataTypes.STRING,
      cnpj: DataTypes.STRING,
      hora_abrir: DataTypes.DATE,
      hora_fechar: DataTypes.DATE
    },
      {
        sequelize
      })
  }
}

module.exports = estabelecimento;
