'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('pedido_has_items', [
      {
        pedido_id: 1,
        item_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pedido_id: 2,
        item_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pedido_id: 3,
        item_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('pedido_has_items', null, {});
  }
};
