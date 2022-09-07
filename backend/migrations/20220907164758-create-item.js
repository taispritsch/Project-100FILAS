'use strict';

module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('items', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      descricao: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      valor: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      estabelecimento_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'estabelecimentos',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  down(queryInterface, Sequelize) {
    return queryInterface.dropTable('items');
  }
};
