'use strict';

module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('log_pedidos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      pedido_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        References: {
          model: 'pedidos',
          key: 'id'
        }
      },
      token_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'tokens',
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
    return queryInterface.dropTable('log_pedidos');
  }
};
