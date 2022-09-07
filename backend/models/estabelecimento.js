const {Model, DataTypes} = require('sequelize');

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





/* 
const Sequelize = require('sequelize');
const db = require('../utils/connectionDB');
const Estabelecimento = db.define('estabelecimentos', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    FOREIGNKEYS: true

  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  senha: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  descricao: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  telefone: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cnpj: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  hora_abrir: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  hora_fechar: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Estabelecimento; */