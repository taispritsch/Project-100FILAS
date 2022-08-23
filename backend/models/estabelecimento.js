'use strict';
const { Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class estabelecimento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  estabelecimento.init({
    nome: DataTypes.STRING,
    senha: DataTypes.STRING,
    descricao: DataTypes.STRING,
    email: DataTypes.STRING,
    telefone: DataTypes.STRING,
    cnpj: DataTypes.STRING,
    hora_abrir: DataTypes.STRING,
    hora_fechar: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'estabelecimento',
  });
  return estabelecimento;
};