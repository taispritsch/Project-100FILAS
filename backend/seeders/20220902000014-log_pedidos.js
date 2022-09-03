'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('log_pedidos', [{
      //pedido_id: '1',
      token_id: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      //pedido_id: '2',
      token_id: '2',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      //pedido_id: '3',
      token_id: '3',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('log_pedidos', null, {});
  }
};
