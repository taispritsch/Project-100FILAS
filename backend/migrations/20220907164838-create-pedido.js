'use strict';

module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('pedidos', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      observacao: {
        type: Sequelize.STRING,
        allowNull: true,
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
          model: 'items',
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
    return queryInterface.dropTable('pedidos');
  }
};
