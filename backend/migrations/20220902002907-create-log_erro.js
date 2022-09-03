'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('log_erros', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      horario: {
        type: Sequelize.DATE,
        allowNull: false,
        },
      acao: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      token_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'tokens',
            key: 'id'
        }
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

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('log_erros');
  }
};