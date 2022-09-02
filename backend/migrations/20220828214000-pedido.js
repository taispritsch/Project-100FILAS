'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pedidos', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      observacao: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      quantidade_item: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      valor_total: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      item_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'itens',
          key: 'id'
        }
      },
      item_nome: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'itens',
          key: 'nome'
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

      async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('pedidos');
    }
};
