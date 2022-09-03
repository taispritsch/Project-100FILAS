
const Sequelize = require('sequelize');
const db = require('../utils/connectionDB');
const Estabelecimento = db.define('estabelecimentos', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        FOREIGNKEY: true
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

module.exports = Estabelecimento;