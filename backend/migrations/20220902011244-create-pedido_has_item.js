'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('pedido_has_itens', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      pedido_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'pedidos',
          key: 'id'
        }
      },
      item_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'itens',
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
    await queryInterface.dropTable('pedido_has_itens');
  }
};
